import Command from './Command'

class BGM extends Command {
	constructor(data) {
		super('BGM', data)
	}

	async execute(context) {
		context.audioManager.changeBGM(this.data.value)
		context.execute()
	}

	async done() {}
}

export default BGM
