import AddTalk from '@/commands/AddTalk'
import BG from '@/commands/BG'
import BGM from '@/commands/BGM'
import Block from '@/commands/Block'
import Choices from '@/commands/Choices'
import Jump from '@/commands/Jump'
import Monologue from '@/commands/Monologue'
import Name from '@/commands/Name'
import SFX from '@/commands/SFX'
import Talk from '@/commands/Talk'
import Guide from '@/commands/Guide'
import { ImageShow, ImageHide } from '@/commands/Image'

class ScriptManager {
	constructor() {
		this.script = null
	}

	parseScript(script) {
		this.script = script
		const constructors = {
			'add-talk': AddTalk,
			bg: BG,
			bgm: BGM,
			block: Block,
			choices: Choices,
			jump: Jump,
			monologue: Monologue,
			name: Name,
			sfx: SFX,
			talk: Talk,
			guide: Guide,
			show: ImageShow,
			hide: ImageHide
		}

		const blockPair = {}
		const commands = []
		script.forEach((line, index) => {
			if (line.key === 'block') {
				blockPair[line.value] = index
			}
			const command = new constructors[line.key](line, index)
			commands.push(command)
		})
		return {
			blockPair,
			commands
		}
	}
}

export default ScriptManager
