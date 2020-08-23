import Component from '@/components/common/component'

import './style.css'

class Dialog extends Component {
	constructor() {
		super('Dialog')
		this.states = {
			name: '',
			nameColor: 'black',
			text: '',
			textSpeed: 0.07
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

	async doTalk(text, isAdd) {
		if (this.isTyping) {
			return
		}
		this.isTyping = true
		if (!isAdd) {
			this.setStates({ text: '' })
		}
		for (const character of text) {
			this.setStates({
				text: this.states.text + character
			})
			await this.delay(this.states.textSpeed * 1000)
		}
		this.isTyping = false
	}

	setName(text, color) {
		this.setStates({
			name: text,
			nameColor: color
		})
	}

	render() {
		return super.render(
			`
      <span class="name" style="color: ${this.states.nameColor}">${this.states.name}</span>
      <p class="text">${this.states.text}</p>
    `,
			[{ name: 'class', value: 'dialog' }]
		)
	}
}

export default Dialog
