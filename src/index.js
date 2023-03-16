import React from 'react'
import ReactDOM from 'react-dom'
import foods from './foods.js'
import { choice, remove } from './helpers.js'

const App = () => {
   var food = choice(foods)
   console.log(`I'd like one ${food} please!`)
   console.log(`HERE YOU GO!: ${food}`)
   console.log('Delicious! may I have more?!')
   remove(foods, food)
   console.log(`Sorry we are all out, we have ${foods}`)
}

ReactDOM.render(<App />, document.getElementById('root'))