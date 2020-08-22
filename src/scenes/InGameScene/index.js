import Component from '@/components/common/component'
import Dialog from '@/components/Dialog'
import BG from '@/components/BG'
import Monologue from '@/components/Monologue'
import Choices from '@/components/Choices'
import Guide from '@/components/Guide'
import AudioManager from '@/components/AudioManager'
// import script from '@/assets/script/test'

import './style.css'

class InGameScene extends Component {
  constructor() {
    super('InGameScene')
    this.dialog = new Dialog()
    this.bg = new BG()
    this.monologue = new Monologue()
    this.choices = new Choices()
    this.guide = new Guide()
    this.audio = new AudioManager()
    this.addChildren(this.dialog, this.bg, this.monologue, this.choices, this.guide)
  }

  mount() {
    super.mount()
    this.dialog.setName('테스트', 'red')
    this.dialog.doTalk('하하하하하하하하하하하')
    setTimeout(() => {
      this.guide.changeState('idle')
    }, 300)
    document.addEventListener('click', () => {
      this.audio.changeBGM('Zombie_March')
      this.audio.playSFX('shooting_star')
    })
    // setTimeout(() => {
    //   this.bg.changeBG('park_evening')
    // }, 300)
    // setTimeout(() => {
    //   this.monologue.show('Chrome 브라우저로 보시는 것을 권장합니다.')
    // }, 1000)
    // setTimeout(() => {
    //   this.monologue.hide()
    // }, 4000)
    // setTimeout(() => {
    //   this.choices.show([
    //     { text: '1번 테스트', value: 'block1' },
    //     { text: '2번 테스트', value: 'block1' },
    //     { text: '3번 테스트', value: 'block1' },
    //   ])
    // }, 4500)
  }

  render() {
    return super.render(`
      ${this.bg.render()}
      ${this.dialog.render()}
      ${this.monologue.render()}
      ${this.choices.render()}
      ${this.guide.render()}
      `,
       [ { name: 'class', value: 'in-game-scene' } ],
       'section')
  }
}

export default InGameScene
