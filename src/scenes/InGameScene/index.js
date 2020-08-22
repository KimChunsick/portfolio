import Component from '@/components/common/component'
import Dialog from '@/components/Dialog'
// import script from '@/assets/script/test'

import './style.css'

class InGameScene extends Component {
  constructor() {
    super('InGameScene')
    this.dialog = new Dialog()
    this.addChildren(this.dialog)
  }

  mount() {
    super.mount()
    this.dialog.setName('테스트', 'red')
    this.dialog.doTalk('하하하하하하하하하하하')
  }

  render() {
    return super.render(`
      ${this.dialog.render()}
      `,
       [ { name: 'class', value: 'in-game-scene' } ],
       'section')
  }
}

export default InGameScene
