import Component from '@/components/common/component'

import './style.css'

class Monologue extends Component {
	constructor() {
		super('Monologue')
		this.states = {
			text: '',
			textSpeed: 0.1,
			visible: false
		}
		this.isTyping = false
	}

	mount() {
		super.mount()
	}

	delay(amount) {
		return new Promise(resolve => {
			setTimeout(resolve, amount)
		})
	}

	async show(text) {
		if (this.isTyping) {
			return
		}
		this.setStates({
			visible: true
		})
		this.isTyping = true
		for (const character of text) {
			this.setStates({
				text: this.states.text + character
			})
			await this.delay(this.states.textSpeed * 1000)
		}
		this.isTyping = false
	}

	async hide() {
		this.setStates({
			visible: false
		})
		await this.delay(300)
	}

	render() {
		const classNames = this.states.visible ? 'monologue show' : 'monologue'
		return super.render(
			`
      <p class="text">${this.states.text}</p>
    `,
			[{ name: 'class', value: classNames }]
		)
	}
}

export default Monologue
