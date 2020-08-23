import Component from '@/components/common/component'

import './style.css'

class Guide extends Component {
	constructor() {
		super('Guide')
		this.states = {
			state: '',
			visible: false
		}
		this.images = {
			idle: require('@/assets/images/characters/guide-idle.png')
		}
	}

	mount() {
		super.mount()
	}

	delay(time) {
		return new Promise(resolve => {
			setTimeout(resolve, time)
		})
	}

	async changeState(state) {
		if (this.states.state) {
			this.setStates({
				visible: false
			})
			await this.delay(200)
		}
		this.setStates({
			state,
			visible: true
		})
	}

	render() {
		const src = this.images[this.states.state || 'idle']
		const classNames = this.states.visible ? 'character show' : 'character'
		const attributes = [
			{ name: 'class', value: classNames },
			{ name: 'src', value: src }
		]
		return super.render('', attributes, 'img')
	}
}

export default Guide
