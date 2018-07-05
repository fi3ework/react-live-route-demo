import React from 'react'

class ListPage extends React.Component {
  state = { count: 0 }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 200)
  }

  render() {
    const timer = <h2 className="count">count: {this.state.count}</h2>
    const desc = (
      <div className="desc">
        <p>
          This page of route is using <code>LiveRoute</code> with <code>alwaysLive</code>.
        </p>
        <p>It will not unmount after mounted and that means it will only mount once.</p>
      </div>
    )
    return (
      <div>
        {timer}
        {desc}
      </div>
    )
  }
}

export default ListPage
