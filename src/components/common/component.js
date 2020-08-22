class Component {
	constructor(name) {
		this.ref = null
		this.uniqueId = null
		this.states = {}
		this.children = []
		this.name = name
		this.uniqueId = Date.now() + Math.random().toString(16).slice(2)
	}

	mount() {
		this.ref = document.querySelectorAll(`[unique="${this.uniqueId}"]`)[0]
		if (!this.ref) console.log(this.name + '이 친구는 ref가 업따! 혹시 render를 한번이라도 했나요??')
		this.mountChildren()
	}

	setStates(states) {
		this.willChangeStates(states)
		this.states = { ...this.states, ...states }
		if (!!this.ref) {
			this.rerender()
			for (const child of this.children) {
				child.render()
			}
		}
		this.didChangedStates()
	}

	addChildren(...child) {
		this.children.push(...child)
	}

	removeChild(child) {
		this.children = this.children.filter((data) => {
			return data.uniqueId !== child.uniqueId
		})
	}

	removeChildAll() {
		this.children = []
	}

	map(targetArr, func) {
		return targetArr.map(func).toString().replace(/,/gi, '')
	}

	render(children, tag = 'div') {
		const element = document.createElement(tag)
		element.insertAdjacentHTML('afterbegin', children)
		element.setAttribute('unique', this.uniqueId)
		return element.outerHTML
	}

	rerender(children) {
		const target = this.ref
		target.innerHTML = null
		if (!!children) {
			target.insertAdjacentHTML('afterbegin', children)
		} else {
			target.insertAdjacentHTML('afterbegin', this.render())
		}
		this.mountChildren()
	}

	mountChildren() {
		for (const child of this.children) {
			child.mount()
		}
	}

	willChangeStates(states) {
		for (const child of this.children) {
			child.willChangeStates(states)
		}
	}

	didChangedStates() {
		for (const child of this.children) {
			child.didChangedStates()
		}
	}

	addEventListener(event, callback) {
		const target = this.ref
		if (!target) {
			console.log('이런 아이디는 없구나..', this.uniqueId)
			return
		}
		target.addEventListener(event, callback)
	}
}

export default Component
