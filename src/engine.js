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
        this.keys = [];
        this.values = [];
        this.currentIndex = 0;

        for (let i in this.script) {

        }
    }

    jump(index) {
        this.currentIndex = index;
    }

    parse() {
        let command = this.script[this.currentIndex];
        ++this.currentIndex;
        return {'key': Object.keys(command)[0], 'bodys': Object.values(command)};
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
        this.blocks= {};
        this.setting = setting;
        this.scriptController = new ScriptController(script);
        this.textWriter = new TextWriter(this.setting);

        this.bgm = new Audio();
        this.bgm.loop = true;

        this.voice = new Audio();
        this.sfxPool = new ObjectPool(Audio, 3);
    }

    start () {
        const self = this;
        document.addEventListener('click', function() {
            if (self.textWriter.isTyping && !self.setting.clickToSkipText) {
                return;
            }
            self.excuteCommand();
        });
    }

    excuteCommand() {
        let command = this.scriptController.parse();
        let body = command.bodys[0];
        switch (command.key) {
            case 'talk':
                this.textWriter.write(body.talker, body.message);
                break;
            case 'add':
                this.textWriter.add(body.message);
                break;
            case 'block':
                this.blocks[body.name] = this.scriptController.currentIndex - 1;
                this.excuteCommand();
                break;
            case 'jump':
                const index = this.blocks[body.to];
                this.scriptController.jump(index);
                this.excuteCommand();
                break;
            case 'choice':
                this.showChoices();
                break;
            default:
                console.warn(command.key + "를 실행시킬 수 없습니다.");
                break;
        }
    }

    showChoices() {

    }
}

export { Engine };
