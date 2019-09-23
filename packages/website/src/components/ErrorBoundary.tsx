import React from 'react'

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(_error: any) {
    return { hasError: true }
  }

  componentDidCatch(error: any, info: any) {
    console.error(error, info)
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props

    return hasError ? <img src="https://http.cat/400" alt="big ole error" /> : children
  }
}
