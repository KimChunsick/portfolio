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
		this.isChoosing = false
		this.choices = []
		this.resolve = null
	}

	mount() {
		super.mount()
	}

	async show(choices) {
		if (this.isChoosing) {
			return
		}

		this.isChoosing = true
		this.removeChildAll()
		this.setStates({
			datas: choices,
			visible: true
		})
		return await new Promise(resolve => {
			this.resolve = resolve
		})
	}

	hide() {
		this.setStates({
			visible: false,
			datas: []
		})
	}

	willChangeStates(states) {
		super.willChangeStates(states)
		this.redrawChoices(states)
	}

	redrawChoices(states) {
		this.removeChildAll()
		this.choices = states.datas.map(
			data =>
				new Choice(data.text, data.value, data => {
					this.isChoosing = false
					this.resolve(data)
				})
		)
		this.addChildren(...this.choices)
	}

	render() {
		const choices = this.choices.map(data => data.render()).join('')
		return super.render(choices, [{ name: 'class', value: 'choices' }])
	}
}

export default Choices
