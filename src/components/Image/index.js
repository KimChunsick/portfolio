import Component from '@/components/common/component'

import './style.css'

class Image extends Component {
	constructor() {
		super('Image')
		this.states = {
			current: '',
			visible: false
		}
		this.images = {
			resume1: require('@/assets/images/references/resume1.png')
		}
	}

	mount() {
		super.mount()
	}

	show(name) {
		this.setStates({
			visible: true,
			current: name
		})
	}

	hide() {
		this.setStates({
			visible: false
		})
	}

	render() {
		const src = this.states.current ? this.images[this.states.current] : ''
		const classNames = this.states.visible ? 'image show' : 'image'
		const attributes = [
			{ name: 'class', value: classNames },
			{ name: 'src', value: src }
		]
		return super.render('', attributes, 'img')
	}
}

export default Image
