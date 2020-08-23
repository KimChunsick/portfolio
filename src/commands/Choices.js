import Command from './Command'

class Choices extends Command {
	constructor(data) {
		super('Choices', data)
	}

	async execute(context) {
		const result = await context.choices.show(this.data.value)
		context.jump(result)
		context.execute()
	}

	async done(context) {
		context.choices.hide()
	}
}

export default Choices
