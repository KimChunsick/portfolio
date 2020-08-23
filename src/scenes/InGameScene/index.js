import Component from '@/components/common/component'
import Dialog from '@/components/Dialog'
import BG from '@/components/BG'
import Monologue from '@/components/Monologue'
import Choices from '@/components/Choices'
import Guide from '@/components/Guide'
import AudioManager from '@/components/AudioManager'
import ScriptManager from '@/components/ScriptManager'
import script from '@/assets/script'

import './style.css'

class InGameScene extends Component {
	constructor() {
		super('InGameScene')
		this.dialog = new Dialog()
		this.bg = new BG()
		this.monologue = new Monologue()
		this.choices = new Choices()
		this.guide = new Guide()
		this.audioManager = new AudioManager()
		this.scriptManager = new ScriptManager()
		this.addChildren(
			this.dialog,
			this.bg,
			this.monologue,
			this.choices,
			this.guide
		)

		this.working = false
		this.commandIndex = -1
		this.beforeCommand = null
		const data = this.scriptManager.parseScript(script)
		this.blockPair = data.blockPair
		this.commands = data.commands
	}

	async execute() {
		this.working = true
		if (this.beforeCommand) {
			await this.beforeCommand.done(this)
		}
		this.commandIndex += 1
		this.beforeCommand = this.commands[this.commandIndex]
		await this.commands[this.commandIndex].execute(this)
		this.working = false
	}

	jump(name) {
		const index = this.blockPair[name]
		this.commandIndex = index
	}

	mount() {
		super.mount()
		const event =
			navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i)
				? 'touchstart'
				: 'click'
		document.addEventListener(event, () => {
			if (
				this.working ||
				this.dialog.isTyping ||
				this.monologue.isTyping ||
				this.choices.isChoosing
			) {
				return
			}
			this.execute()
		})

		// 첫 명령어는 자동실행
		this.execute()
	}

	render() {
		return super.render(
			`
      ${this.bg.render()}
      ${this.dialog.render()}
      ${this.monologue.render()}
      ${this.choices.render()}
      ${this.guide.render()}
      `,
			[{ name: 'class', value: 'in-game-scene' }],
			'section'
		)
	}
}

export default InGameScene
