import '@/style/global.css'
import InGameScene from '@/scenes/InGameScene'

const app = document.getElementById('app')
const inGameScene = new InGameScene()
app.insertAdjacentHTML('afterbegin', inGameScene.render())
inGameScene.mount()
