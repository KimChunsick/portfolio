class AudioManager {
  constructor() {
    const silence = document.getElementById('audio')
    silence.src = require('@/assets/sounds/silence.mp3')
    this.audios = {
      'Sad_Minuet': require('@/assets/sounds/bgm/Sad_Minuet.mp3'),
      'Zombie_March': require('@/assets/sounds/bgm/Zombie_March.mp3'),
      'shooting_star': require('@/assets/sounds/sfx/shooting_star.mp3'),
    }
    this.bgm = new Audio()
    this.bgm.loop = true
    this.sfx = new Audio()
    
    this.bgm.src = require('@/assets/sounds/bgm/Sad_Minuet.mp3')
    setTimeout(() => {
      this.bgm.play()
    }, 100)
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