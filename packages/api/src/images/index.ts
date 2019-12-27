import functions from 'firebase-functions'
import { storage } from 'firebase-admin'
import { spawn } from 'child_process'
import { promisify } from 'util'
import fs from 'fs'
import path from 'path'
import os from 'os'

import logger from '../logger'

type Paths = {
  tempLocalFile: string
  tempLocalThumbFile: string
  thumbFilePath: string
}

const THUMB_PREFIX = 'thumb_'
const THUMB_HEIGHT = 200
const promisedMkdir = promisify(fs.mkdir)

const promisedSpawn = async (cmd: string, args: string[]) => {
  const child = spawn(cmd, args)

  return new Promise((resolve, reject) => {
    child.on('close', resolve)
    child.on('error', reject)
  })
}

const createPaths = (name: string): Paths => {
  const fileDir = path.dirname(name)
  const fileName = path.basename(name)
  const thumbFilePath = path.normalize(
    path.join(fileDir, 'thumbnails', `${THUMB_PREFIX}${fileName}`)
  )
  const tempLocalFile = path.join(os.tmpdir(), fileDir, fileName)
  const tempLocalThumbFile = path.join(os.tmpdir(), thumbFilePath)

  return { tempLocalFile, tempLocalThumbFile, thumbFilePath }
}

const convertAndUpload = async (
  { bucket, name, contentType }: functions.storage.ObjectMetadata,
  { tempLocalFile, tempLocalThumbFile, thumbFilePath }: Paths
) => {
  logger.log('converting file: ', { name, tempLocalFile, tempLocalThumbFile, thumbFilePath })
  const objectBucket = storage().bucket(bucket)
  const metadata = {
    contentType
  }

  await promisedMkdir(path.dirname(tempLocalFile), { recursive: true })
  await promisedMkdir(path.dirname(tempLocalThumbFile), { recursive: true })
  await objectBucket.file(name).download({ destination: tempLocalFile })
  logger.log('downloaded the file and made directories')

  logger.log('running command', tempLocalFile, '-thumbnail', `x${THUMB_HEIGHT}`, tempLocalThumbFile)
  await promisedSpawn('convert', [
    tempLocalFile,
    '-thumbnail',
    `x${THUMB_HEIGHT}`,
    tempLocalThumbFile
  ])
  logger.log('converted the file')

  await objectBucket.upload(tempLocalThumbFile, { destination: thumbFilePath, metadata })
  logger.log('uploaded the file')

  fs.unlinkSync(tempLocalFile)
  fs.unlinkSync(tempLocalThumbFile)
  logger.log('cleaned up')
}

const generateThumbnail = async (object: functions.storage.ObjectMetadata) => {
  const { name, contentType } = object

  if (!contentType.startsWith('image/')) {
    return logger.log('not an image')
  }

  if (path.basename(name).startsWith(THUMB_PREFIX)) {
    return logger.log('already a thumbnail')
  }

  const paths = createPaths(name)

  try {
    await convertAndUpload(object, paths)
  } catch (error) {
    logger.error('error while trying to create thumbnail', error)
  }

  return logger.log('successfully made thumbnail', name)
}

export default generateThumbnail
