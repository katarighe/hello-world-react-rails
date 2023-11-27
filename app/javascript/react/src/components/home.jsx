import * as React from 'react'
import * as Reaction from 'react-dom'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

Reaction.render(<Home />, document.getElementById('reactRender'))

export default Home;