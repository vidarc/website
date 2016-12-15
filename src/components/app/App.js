import React, {
  Component
} from 'react'
import {
  Container
} from 'semantic-ui-react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: null
    }
  }

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance to children
      })
    }

    return <Container>
      <Navbar auth={this.props.route.auth} />
      {children}
      <Footer />
    </Container>
  }
}
