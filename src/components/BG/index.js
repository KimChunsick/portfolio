import Component from '@/components/common/component'

import './style.css'

class BG extends Component {
	constructor() {
		super('BG')
		this.states = {
			current: ''
		}
		this.bgs = {
			'art-gallery1': require('@/assets/images/bgs/art-gallery1.jpg'),
			'art-gallery2': require('@/assets/images/bgs/art-gallery2.jpg'),
			park_afternoon: require('@/assets/images/bgs/park_afternoon.png'),
			park_evening: require('@/assets/images/bgs/park_evening.png'),
			park_night: require('@/assets/images/bgs/park_night.png')
		}
	}

	mount() {
		super.mount()
	}

	changeBG(name) {
		this.setStates({
			current: name
		})
	}

	render() {
		const bg = this.states.current
			? `background-image: url("${this.bgs[this.states.current]}")`
			: ''
		const attributes = [
			{ name: 'class', value: 'bg' },
			{ name: 'style', value: bg }
		]
		return super.render('', attributes)
	}
}

export default BG
