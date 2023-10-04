import '../style.css'
import Phaser from 'phaser'
import { LoadScene } from './scenes/LoadScene'
import { MenuScene } from './scenes/MenuScene'

let game = new Phaser.Game({
  width: 800,
  height: 580,
  backgroundColor: 0xf5cec7,
  scene:[
    LoadScene, MenuScene
  ]
})