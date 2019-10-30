import React from 'react'
import { RouteComponentProps } from '@reach/router'
import styled from '@emotion/styled'

import galaxy from './galaxy.png'

const Banner = styled.img`
  margin: 0;
`

const Header = styled.header`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
`

const ArticleHeader = styled.header`
  font-size: 1.1rem;
`

const Home: React.SFC<RouteComponentProps> = () => (
  <div>
    <Banner src={galaxy} alt="galaxy banner" />
    <Header id="welcome-text">My name is Matthew Ailes and this is my website.</Header>
    <main>
      <article>
        <ArticleHeader>The Purpose of this Site</ArticleHeader>
        <small>¯\_(ツ)_/¯</small>
        <p>
          I&apos;m currently a developer working at Capital One (since 2016), and this is my
          freetime playground. Nothing super interesting will happen here, and the examples will be
          fairly simple. This is my setup to test out and try new things that I am unable to use at
          work currently. Things like:
        </p>
        <ul>
          <li>
            full monorepo with <a href="https://lerna.js.org/">Lerna</a> and{' '}
            <a href="https://yarnpkg.com/en/docs/workspaces">Yarn Workspaces</a>
          </li>
          <li>
            <a href="https://travis-ci.com/dashboard">travis-ci</a>
          </li>
          <li>
            <a href="https://reactjs.org/">React</a>
          </li>
          <li>
            <a href="https://www.apollographql.com/">Apollo GraphQL</a>
          </li>
        </ul>
        <p>
          I spend the rest of my free time doing things like watching{' '}
          <a href="https://www.dcunited.com/">DC United</a> or{' '}
          <a href="https://www.tottenhamhotspur.com/">Tottenham Hotspur</a>, playing some video
          games, and occasionally playing my guitars.
        </p>
      </article>
    </main>
  </div>
)

export default Home
