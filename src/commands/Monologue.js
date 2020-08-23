import Command from './Command'

class Monologue extends Command {
	constructor(data) {
		super('Monologue', data)
	}

	async execute(context) {
		await context.monologue.show('Chrome 브라우저로 보시는 것을 권장합니다.')
	}

	async done(context) {
		await context.monologue.hide()
	}
}

export default Monologue
