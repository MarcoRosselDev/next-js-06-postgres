import './style.css'
//import { setupCounter } from './counter.js'
//import {graphTest} from './graph.js'
import {barra} from './project/barra.js'

document.querySelector('#app').innerHTML = `
  <div id='main-div'>
    <div id='graph'>
      <p class="read-the-docs">
        testing
      </p>
    </div>
    <div id='barra'>
      <p class="read-the-docs">
        testing
      </p>
    </div>
  </div>
`

barra(document.getElementById('barra'))
//graphTest(document.getElementById('graph'))
//setupCounter(document.querySelector('#counter'))
