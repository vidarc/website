import json
import swapi


def writeToFile(type):
    print('getting ' + type)
    with open(type + '.json', 'w') as f:
        f.write('[')

        for object in swapi.get_all(type).iter():
            del object.created
            del object.edited
            object.id = int(object.url.split('/')[5])
            del object.url

            convertUrlToId(object, 'starships')
            convertUrlToId(object, 'characters')
            convertUrlToId(object, 'vehicles')
            convertUrlToId(object, 'species')
            convertUrlToId(object, 'planets')
            convertUrlToId(object, 'films')
            convertUrlToId(object, 'pilots')
            convertUrlToId(object, 'people')
            convertUrlToId(object, 'residents')

            if 'homeworld' in object.__dict__:
                if object.homeworld is not None:
                    object.homeworld = int(object.homeworld.split('/')[5])
                else:
                    object.homeworld = -1

            f.write(json.dumps(object.__dict__, indent=2,
                               separators=(',', ': ')))
            f.write(',')
        f.write(']')
        f.close()


def convertUrlToId(object, key):
    try:
        if object.__dict__[key]:
            for index, url in enumerate(object.__dict__[key]):
                object.__dict__[key][index] = int(url.split('/')[5])
    except:
        pass


writeToFile('people')
writeToFile('films')
writeToFile('starships')
writeToFile('vehicles')
writeToFile('species')
writeToFile('planets')
