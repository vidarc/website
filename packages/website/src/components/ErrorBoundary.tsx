import React from 'react'

interface Props {
  children: React.ReactChild[]
}

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true }
  }

  componentDidCatch(error: any, info: any) {
    console.error(error, info)
  }

  render() {
    return this.state.hasError ? <img src='https://http.cat/400' alt='big ole error' /> : this.props.children
  }
}
