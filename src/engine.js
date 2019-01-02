"use strict";

import setting from './settings.js'
import { notifyCenter, scriptController, choiceController, bgConrtoller, NotificationName, ObjectPool } from './controllers.js'

class TextWriter {
    constructor() {
        this.isTyping = false;
    }

    setTalker(text) {
        document.querySelector(".dialog_talker").innerHTML = text;
    }

    async write(talker, text) {
        this.isTyping = true;
        let typing = '';
        const delay = ms => new Promise(res => setTimeout(res, ms));
        this.setTalker(talker);
        for (let i in text) {
            typing += text[i];
            await delay(setting.print.speed);
            document.querySelector(".dialog_text").innerHTML = typing;
        }
        this.isTyping = false;
    }

    async add(text) {
        this.isTyping = true;
        const delay = ms => new Promise(res => setTimeout(res, ms));
        for (const i in text) {
            await delay(setting.print.speed);
            document.querySelector(".dialog_text").innerHTML += text[i];
        }
        this.isTyping = false;
    }
}

class Engine {
    constructor() {
        this.setUp();
    }

    setUp() {
        this.textWriter = new TextWriter();

        this.bgm = new Audio();
        this.bgm.loop = true;
        this.voice = new Audio();
        this.sfxPool = new ObjectPool(Audio, 3);
        this.touchEvent = (navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i)) ? 'touchstart' : 'click';
        this.gameSection = document.getElementsByClassName('game')[0];

        notifyCenter.addSubscriber(NotificationName.select, this.excuteCommand);
    }

    start () {
        engine.gameSection.style.display = 'block';
        engine.excuteCommand();
        document.addEventListener(engine.touchEvent, function() {
            if ((engine.textWriter.isTyping ||  choiceController.isChoicing) && setting.print.clickToSkipText) {
                return;
            }
            engine.excuteCommand();
        });
    }

    excuteCommand() {
        let command = scriptController.getCommand();
        let body = command.body;
        switch (command.key) {
            case 'talk':
                engine.textWriter.write(body.talker, body.message);
                break;
            case 'add':
                engine.textWriter.add(body.message);
                break;
            case 'block':
                engine.excuteCommand();
                break;
            case 'jump':
                scriptController.jump(body.to);
                engine.excuteCommand();
                break;
            case 'choice':
                choiceController.showChoice(body);
                break;
            case 'bgm': {
                    const path = 'assets/sounds/bgm/';
                    engine.bgm.src = path + body.filename;
                    engine.bgm.loop = true;
                    // engine.bgm.
                    engine.bgm.play().catch(function (error) {
                        console.log(error);
                    });
                    engine.excuteCommand();
                }
                break;
            case 'sfx': {
                    const path = 'assets/sounds/sfx/';
                    const sfx = this.sfxPool.getObject();
                    sfx.src = path + body.filename;
                    sfx.play().catch(function (error) {
                        console.log(error);
                    });
                    sfx.onended = function () {
                        sfx.pool.backToPool(sfx);
                    };
                    engine.excuteCommand();
                }
                break;
            case 'bg':
                bgConrtoller.showBG(body.filename);
                engine.excuteCommand();
                break;
            case 'bg_change':
                bgConrtoller.swapBG(body.filename);
                engine.excuteCommand();
                break;
            default:
                console.warn(command.key + "를 실행시킬 수 없습니다.");
                break;
        }
    }
}

let engine = new Engine();

export { engine };
