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

class ScriptParser {
    constructor(script) {
        this.script = script;
        this.currentIndex = 0;
    }

    parse() {
        let command = this.script[this.currentIndex];
        return {'key': Object.keys(command)[0], 'body': Object.values(command)[0]};
    }
}

class TextWriter {
    async write(text) {
        let typing = '';
        const delay = ms => new Promise(res => setTimeout(res, ms));
        for (const i in text) {
            typing += text[i];
            await delay(50);
            document.querySelector(".dialog").innerHTML = typing;
        }
    }
}

class Engine {
    constructor(init_script, settings) {
        this.setUp(init_script, settings);
    }

    setUp(script, setting) {
        this.setting = setting;
        this.parser = new ScriptParser(script);
        this.writer = new TextWriter();

        this.bgm = new Audio();
        this.bgm.loop = true;

        this.voice = new Audio();
        this.sfxPool = new ObjectPool(Audio, 3);
    }

    start () {
        let command = this.parser.parse();
        this.excuteCommand(command);
    }

    excuteCommand(command) {
        let body = command.body;
        switch (command.key) {
            case 'talk':
                this.writer.write(body.message);
                break;
            case 'add':
                this.writer.write(body.message);
        }
        // const _ = {
        //     'talk': function(body) {
        //         console.log(this);
        //         this.writer.write(body.message);
        //     },
        //     'add': function(body) {
        //
        //     }
        // }[command.key](command.body);
    }
}

export { Engine };
