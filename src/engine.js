"use strict";

import setting from "./settings.js";
import { notifyCenter, scriptController, choiceController, bgConrtoller, textWriter, NotificationName, ObjectPool } from './controllers.js'

class Engine {
    constructor() {
        // if (isChrome) {
            // console.log('chrome');
            // this.bgm = new Audio();
            // this.bgm.loop = true;
        // } else {
        //     console.log('not c');
        //     document.getElementById('audio').remove();
            this.bgm = new Audio();
            this.bgm.loop = true;
        // }

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
            if ((textWriter.isTyping ||  choiceController.isChoicing) && setting.print.clickToSkipText) {
                return;
            }
            engine.excuteCommand();
        });
    }

    excuteCommand() {
        let command = scriptController.getCommand();
        let body = command.body;
        bgConrtoller.enable();
        textWriter.enableDialog();
        textWriter.monologue.innerHTML = '';
        if (command.key === 'talk') {
            textWriter.write(body.talker, body.message);
        } else if (command.key === 'add') {
            textWriter.add(body.message);
        } else if (command.key === 'block') {
            engine.excuteCommand();
        } else if (command.key === 'jump') {
            scriptController.jump(body.to);
            engine.excuteCommand();
        } else if (command.key === 'choice') {
            choiceController.showChoice(body);
        } else if (command.key === 'bgm') {
            {
                const path = 'assets/sounds/bgm/';
                engine.bgm.setAttribute("src", (path + body.filename));
                engine.bgm.play().catch(function (error) {
                    console.log(error.toLocaleString());
                });
                engine.excuteCommand();
            }
        } else if (command.key === 'sfx') {
            {
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
        } else if (command.key === 'bg') {
            bgConrtoller.showBG(body.filename);
            engine.excuteCommand();
        } else if (command.key === 'bg_change') {
            bgConrtoller.swapBG(body.filename);
            engine.excuteCommand();
        } else if (command.key === 'monologue') {
            bgConrtoller.disable();
            textWriter.disableDialog();
            textWriter.writeMologue(body.message);
        } else if (command.key === 'script') {
            scriptController.changeScript(body.name);
            engine.excuteCommand();
        } else {
            console.warn(command.key + "를 실행시킬 수 없습니다.");
        }
    }
}

let engine = new Engine();

export { engine };
