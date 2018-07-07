import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter } from 'react-router-dom'
import LiveRoute from './LiveRoute'
import Switch from './Switch'
import List from './list'
import Detail from './detail'
import Bar from './bar'
import About from './about'
import Home from './home'
import './styles.css'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <LiveRoute path="/items" component={List} livePath="/item/:id" />
      <Route path="/item/:id" component={Detail} />
      <LiveRoute path="/about" alwaysLive={true} component={About} />
      <Bar />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
)
