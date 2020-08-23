class AudioManager {
	constructor() {
		const silence = document.getElementById('audio')
		silence.src = require('@/assets/sounds/silence.mp3')
		this.audios = {
			Sad_Minuet: require('@/assets/sounds/bgm/Sad_Minuet.mp3'),
			Walk_On_Concrete: require('@/assets/sounds/sfx/Walk_On_Concrete.mp3')
		}
		this.bgm = new Audio()
		this.bgm.loop = true
		this.sfx = new Audio()
	}

	changeBGM(name) {
		this.bgm.pause()
		this.bgm.src = this.audios[name]
		this.bgm.play()
	}

	playSFX(name) {
		this.sfx.pause()
		this.sfx.src = this.audios[name]
		this.sfx.play()
	}
}

export default AudioManager
