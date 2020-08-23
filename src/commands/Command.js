class Command {
	constructor(name, data) {
		this.name = name
		this.data = data
	}

	async execute() {}
	async done() {}
}

export default Command
