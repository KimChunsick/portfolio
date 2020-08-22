class Component {
	constructor(name) {
		this.ref = null
		this.uniqueId = null
		this.states = {}
		this.children = []
		this.name = name
		this.uniqueId = `${Date.now()}|${Math.random().toString(16).slice(2)}`
	}

	mount() {
		this.ref = document.querySelectorAll(`[unique="${this.uniqueId}"]`)[0]
		if (!this.ref) console.warn(this.name + '이 친구는 ref가 업따! 혹시 render를 한번이라도 했나요??')
		this.mountChildren()
	}

	setStates(states) {
		this.willChangeStates(states)
		this.states = { ...this.states, ...states }
		if (this.ref) {
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

	renderAlreadyCreatedElement(children, attributes = []) {
		for (const attribute of this.ref.attributes) {
			if (attribute.name === 'unique') {
				continue
			}
			this.ref.removeAttribute(attribute.name)
		}
		for (const { name, value } of attributes) {
			this.ref.setAttribute(name, value)
		}
		return children
	}

	render(children, attributes = [], tag = 'div') {
		if (this.ref) {
			return this.renderAlreadyCreatedElement(children, attributes)
		}

		const element = document.createElement(tag)
		element.insertAdjacentHTML('afterbegin', children)
		element.setAttribute('unique', this.uniqueId)
		for (const { name, value } of attributes) {
			element.setAttribute(name, value)
		}
		return element.outerHTML
	}

	rerender(children) {
		const target = this.ref
		target.innerHTML = null
		if (children) {
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
			if (child.willChangeStates) {
				child.willChangeStates(states)
			}
		}
	}

	didChangedStates() {
		for (const child of this.children) {
			if (child.didChangedStates) {
				child.didChangedStates()
			}
		}
	}

	addEventListener(event, callback) {
		const target = this.ref
		if (!target) {
			console.warn('이런 아이디는 없구나..', this.uniqueId)
			return
		}
		target.addEventListener(event, callback)
	}
}

export default Component
