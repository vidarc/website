import { ReactNode, Component } from 'react'

import Error from './Error'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: any, info: any) {
    console.error(error, info)
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props

    return hasError ? <Error /> : children
  }
}
