import LoadingScene from '@/scenes/LoadingScene'

const app = document.getElementById('app')
const loadingScene = new LoadingScene()
app.insertAdjacentHTML('afterbegin', loadingScene.render())
loadingScene.mount()
