import Component from '@/components/common/component'
import Choice from './Choice'

import './style.css'

class Choices extends Component {
  constructor() {
    super('Choices')
    this.states = {
      datas: [],
      visible: false
    }
    this.choices = []
  }

  mount() {
    super.mount()
  }

  show(choices) {
    this.removeChildAll()
    this.setStates({
      datas: choices,
      visible: true
    })
  }

  hide() {
    this.setStates({
      visible: false
    })
  }

  willChangeStates(states) {
    super.willChangeStates(states)
    this.redrawChoices(states)
  }

  redrawChoices(states) {
    this.removeChildAll()
    this.choices = states.datas.map((data) => new Choice(data.text, data.value))
    this.addChildren(...this.choices)
  }

  render() {
    const choices = this.choices.map(data => data.render()).join('')
    return super.render(choices, [{ name: 'class', value: 'choices' }])
  }
}

export default Choices
