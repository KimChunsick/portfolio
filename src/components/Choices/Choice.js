import Component from '@/components/common/component'

import './style.css'

class Choice extends Component {
	constructor(text, value, callback) {
		super('Choice')
		this.states = {
			text,
			value
		}
		this.callback = callback
	}

	mount() {
		super.mount()
		this.ref.addEventListener('click', () => {
			this.callback(this.states.value)
		})
	}

	render() {
		return super.render(
			`
      <span>${this.states.text}</span>
    `,
			[{ name: 'class', value: 'choice' }],
			'button'
		)
	}
}

export default Choice
