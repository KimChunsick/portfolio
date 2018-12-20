"use strict";

class ObjectPool {
    constructor(template, init_count) {
        this.pool = [];
        this.template = template;

        for (let i = 0; i < init_count; ++i) {
            this.pool.push(this.makeInstance());
        }
    }

    makeInstance() {
        return new this.template();
    }

    addObject(object) {
        object.pool = this;
        this.pool.push(object);
    }

    getObject() {
        if (this.pool.length === 0) {
            return this.pool.pop();
        }
        let object = this.makeInstance();
        object.pool = this;
        return object;
    }
}

class PooledObject {
    constructor() {
        this.pool = null;
    }

    backToPool() {
        this.pool.addObject(this);
    }
}

class ScriptController {
    constructor(script) {
        this.script = script;
        this.currentIndex = 0;

        this.keys = [];
        this.values = [];
        this.blocks = {};

        for (let i in this.script) {
            this.keys.push(Object.keys(this.script[i])[0]);
            this.values.push(Object.values(this.script[i])[0]);

            if (this.keys[i] === 'block') {

                this.blocks[this.values[i].name] = i;
            }
        }
    }

    jump(key) {
        const index = this.blocks[key];
        this.currentIndex = index;
    }

    getCommand() {
        let index = this.currentIndex++;
        return {'key': this.keys[index], 'body': this.values[index]};
    }
}

class ChoiceController {
    constructor() {
        this.isChoicing = false;
        this.choiceElement = document.getElementById('choice');
    }

    showChoice(command, scriptController) {
        this.isChoicing = true;
        for (let i in command) {
            let element = document.createElement('button');
            let node = document.createTextNode([command[i].message]);
            element.onclick = () => {
                this.removeChoices();
                scriptController.jump(command[i].to);
            };
            element.id = '';
            element.appendChild(node);
            this.choiceElement.appendChild(element);
        }
    }

    removeChoices() {
        const children = this.choiceElement.children;
        while (children.length !== 0) {
            this.choiceElement.removeChild(children[0]);
        }
        this.isChoicing = false;
    }
}

class TextWriter {
    constructor(setting) {
        this.isTyping = false;
        this.setting = setting;
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
            await delay(this.setting.print.speed);
            document.querySelector(".dialog").innerHTML = typing;
        }
        this.isTyping = false;
    }

    async add(text) {
        this.isTyping = true;
        const delay = ms => new Promise(res => setTimeout(res, ms));
        for (const i in text) {
            await delay(this.setting.print.speed);
            document.querySelector(".dialog").innerHTML += text[i];
        }
        this.isTyping = false;
    }
}

class Engine {
    constructor(init_script, settings) {
        this.setUp(init_script, settings);
    }

    setUp(script, setting) {
        this.setting = setting;

        this.scriptController = new ScriptController(script);
        this.choiceController = new ChoiceController();
        this.textWriter = new TextWriter(this.setting);

        this.bgm = new Audio();
        this.bgm.loop = true;
        this.voice = new Audio();
        this.sfxPool = new ObjectPool(Audio, 3);
    }

    start () {
        const self = this;
        document.addEventListener('click', function() {
            if ((self.textWriter.isTyping ||  self.choiceController.isChoicing) && !self.setting.clickToSkipText) {
                return;
            }
            self.excuteCommand();
        });
        document.addEventListener('DOMContentLoaded', self.excuteCommand.bind(this), false);
    }

    excuteCommand() {
        let command = this.scriptController.getCommand();
        let body = command.body;
        switch (command.key) {
            case 'talk':
                this.textWriter.write(body.talker, body.message);
                break;
            case 'add':
                this.textWriter.add(body.message);
                break;
            case 'block':
                this.excuteCommand();
                break;
            case 'jump':
                this.scriptController.jump(body.to);
                this.excuteCommand();
                break;
            case 'choice':
                this.choiceController.showChoice(body, this.scriptController);
                break;
            case 'bgm': {
                    const path = 'assets/sounds/bgm/';
                    this.bgm.src = path + body.filename;
                    this.bgm.play();
                    this.excuteCommand();
                }
                break;
            case 'sfx': {
                    const path = 'assets/sounds/sfx/';
                    const sfx = this.sfxPool.getObject();
                    sfx.src = path + body.filename;
                    sfx.play();
                    this.excuteCommand();
                }
                break;
            default:
                console.warn(command.key + "를 실행시킬 수 없습니다.");
                break;
        }
    }
}

export { Engine };
