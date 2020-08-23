import Command from './Command'

class SFX extends Command {
	constructor(data) {
		super('SFX', data)
	}

	async execute(context) {
		context.audioManager.playSFX(this.data.value)
		context.execute()
	}

	async done() {}
}

export default SFX
