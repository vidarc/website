import React, { Component } from 'react'
import {
  Dimmer,
  Loader,
  Segment
} from 'semantic-ui-react'

const ipsums = [
  "Capt. Malcolm Reynolds: Love. You can learn all the math in the 'verse... but you take a boat in the air that you don't love... she'll shake you off just as sure as the turn of the worlds. Love keeps her in the air when she ought to fall down... tells you she's hurting before she keels. Makes her a home. The Operative: Key members of Parliament. Key. The minds behind every military, diplomatic and covert operation in the galaxy, and you put them in a room with a psychic. Mr. Universe: From here to the eyes and the ears of the 'Verse, that's my motto, or it might be if I start having a motto. The Operative: That girl will rain destruction down on you and your ship. She is an albatross, Captain. Capt. Malcolm Reynolds: Way I remember it, albatross was a ship's good luck, 'til some idiot killed it. Capt. Malcolm Reynolds: [to Inara] Yes, I've read a poem. Try not to faint. Capt. Malcolm Reynolds: I've staked my crew's life on the theory that you're a person, actual and whole, and if I'm wrong, you'd best shoot me now... [River cocks the gun she is pointing at Mal] Capt. Malcolm Reynolds: Or, we could talk some more.",
  "Bart: But mom... Marge: I just don't think it's a good idea Bart: But mom! Marge: Yes? Bart: That's all I got... Marge: Church should help you with your everyday life. Homer: It should, but it doesn't. Now who wants to go down to the dump with me? Cartoonist: Excuse me, but \"proactive\" and \"paradigm\"? Aren't these just buzzwords that dumb people use to sound important? [backpedaling] Cartoonist: Not that I'm accusing you of anything like that. [pause] Cartoonist: I'm fired, aren't I? Krusty the Clown: The faithful people at the Global Positioning System, is all the companionship I need... [taps the GPS box, which delivers a healthy electric shock] Krusty the Clown: AAAARGH! [hurling the box over the side of the boat] Krusty the Clown: Tell me where you are now you bastard! Homer: There's a $10,000 bill in it for you. Barney: Oh yeah? Which president is on it? Homer: Um, all of them. They are having a party. Jimmy Carter is passed out on the couch.",
  "(Zap) What makes a good man go neutral? Lust for gold? Power? Or were you just born with a heart full of neutrality? (Zap) You'd sacrifice this beautiful woman for a moderately attractive ape? You've been smoking some bad granola. (Zap) You win again, gravity! (Zoidberg to Fry) Now open your mouth and lets have a look at that brain. No, no, not that mouth! (Fry) Well I only have one. (Zoidberg) Really??! (Fry) Uh, is there a human Doctor around? (Zoidberg) Young lady, I'm an expert on humans. Now pick a mouth, open it and say \"Yuh da da da DAAA\" (Fry attempting to mimic zoidberg's language) \"Yuh duh da da duh da da da\" (Zoidberg) What?! My mother was a Saint! Get out! (professor)ah to be young again...and also a robot",
  "Spicy jalapeno bacon ipsum dolor amet reprehenderit incididunt aliqua, boudin ut short ribs excepteur cupim tri-tip rump lorem jowl meatloaf fatback. Quis ham burgdoggen capicola pariatur short loin pork chop bresaola. Labore do nostrud quis short ribs in strip steak. Burgdoggen velit laborum ut in, chuck andouille voluptate mollit aliqua pork loin qui jerky cupim.",
  "Swag fingerstache poutine blue bottle, fixie single-origin coffee gochujang biodiesel tilde. Four loko gastropub blog retro unicorn. Sustainable sartorial single-origin coffee lyft pinterest yr. Shabby chic selfies schlitz, 3 wolf moon chillwave live-edge affogato wayfarers. Poke ennui humblebrag, truffaut mlkshk art party irony selvage blue bottle letterpress pok pok food truck. Poke ennui ugh meggings four dollar toast, pok pok gochujang tattooed la croix chillwave pug irony iPhone iceland succulents. Air plant beard pickled tilde."
]

export default class LoadingIpsum extends Component {

  render() {
    let temp = []
    for (let i = 0; i < this.props.times; i++) {
      let rand = Math.floor((Math.random() * ipsums.length));

      temp.push(<div>{ipsums[rand]}</div>)
    }

    return(
      <Segment piled>
        <Dimmer active>
          <Loader size='big' content='Loading...' />
        </Dimmer>
        <p>{temp}</p>
      </Segment>
    )
  }
}
