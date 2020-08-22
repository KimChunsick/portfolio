import Component from '@/components/common/component'
import Dialog from '@/components/Dialog'
import BG from '@/components/BG'
// import script from '@/assets/script/test'

import './style.css'

class InGameScene extends Component {
  constructor() {
    super('InGameScene')
    this.dialog = new Dialog()
    this.bg = new BG()
    this.addChildren(this.dialog, this.bg)
  }

  mount() {
    super.mount()
    this.dialog.setName('테스트', 'red')
    this.dialog.doTalk('하하하하하하하하하하하')
    setTimeout(() => {
      this.bg.changeBG('park_evening')
    }, 1000)
  }

  render() {
    return super.render(`
      ${this.bg.render()}
      ${this.dialog.render()}
      `,
       [ { name: 'class', value: 'in-game-scene' } ],
       'section')
  }
}

export default InGameScene
