import Command from './Command'

export class ImageShow extends Command {
	constructor(data) {
		super('Image', data)
	}

	async execute(context) {
		context.image.show(this.data.value)
	}

	async done() {}
}

export class ImageHide extends Command {
	constructor() {
		super('Image', null)
	}

	async execute(context) {
		context.image.hide()
		context.execute()
	}

	async done() {}
}

export default { ImageShow, ImageHide }
