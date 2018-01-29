import React from 'react'
import ReactDom from 'react-dom'

const Greetings = ({ name }) => {
  const upperCase = name.toUpperCase()
  return <h1>Hello {upperCase}!</h1>
}

const App = () => (
  <div>
    <Greetings name="Jérémy" />
    <Greetings name="Francky" />
  </div>
)

ReactDom.render(<App />, document.getElementById('root'))
