import Component from '@/components/common/component'
import Dialog from '@/components/Dialog'
import BG from '@/components/BG'
import Monologue from '@/components/Monologue'
// import script from '@/assets/script/test'

import './style.css'

class InGameScene extends Component {
  constructor() {
    super('InGameScene')
    this.dialog = new Dialog()
    this.bg = new BG()
    this.monologue = new Monologue()
    this.addChildren(this.dialog, this.bg, this.monologue)
  }

  mount() {
    super.mount()
    this.dialog.setName('테스트', 'red')
    this.dialog.doTalk('하하하하하하하하하하하')
    setTimeout(() => {
      this.bg.changeBG('park_evening')
    }, 300)
    setTimeout(() => {
      this.monologue.show('Chrome 브라우저로 보시는 것을 권장합니다.')
    }, 1000)
    setTimeout(() => {
      this.monologue.hide()
    }, 4000)
  }

  render() {
    return super.render(`
      ${this.bg.render()}
      ${this.dialog.render()}
      ${this.monologue.render()}
      `,
       [ { name: 'class', value: 'in-game-scene' } ],
       'section')
  }
}

export default InGameScene
