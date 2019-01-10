"use strict";

import { test, helloworld } from "./scripts.js";
import setting from "./settings.js";

class ObjectPool {
    constructor(template, init_count) {
        this.pool = [];
        this.template = template;

        for (let i = 0; i < init_count; ++i) {
            this.pool.push(this.makeInstance());
        }
    }

    makeInstance() {
        let instance = new this.template();
        instance.pool = this;
        return instance;
    }

    backToPool(object) {
        this.pool.push(object);
    }

    getObject() {
        if (this.pool.length === 0) {
            return this.makeInstance();
        }
        return this.pool.pop();
    }
}

class NotificationName {
    static get select() { return 'Select'; }
}

class NotificationCenter {

    constructor() {
        this.subscribers = {};
    }

    addSubscriber(name, callback) {
        try {
            notifyCenter.subscribers[name].push(callback);
        } catch {
            notifyCenter.subscribers[name] = [callback]
        }
    }

    removeSubscriber(name, callback) {
        notifyCenter.subscribers[name] -= new Array(callback);
    }

    notifycation(name, values) {
        for (let i in notifyCenter.subscribers[name]) {
            notifyCenter.subscribers[name][i](values);
        }
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
        scriptController.currentIndex = scriptController.blocks[key];
    }

    getCommand() {
        let index = scriptController.currentIndex++;
        return {'key': scriptController.keys[index], 'body': scriptController.values[index]};
    }
}

class TextWriter {
    constructor() {
        this.isTyping = false;
        this.talker = document.querySelector('.dialog_talker');
        this.text = document.querySelector('.dialog_text');
        this.monologue = document.getElementById('monologue');
    }

    setTalker(text) {
        textWriter.talker.innerHTML = text;
    }

    async write(talker, text) {
        textWriter.isTyping = true;
        let typing = '';
        const delay = ms => new Promise(res => setTimeout(res, ms));
        textWriter.setTalker(talker);
        for (let i in text) {
            typing += text[i];
            await delay(setting.print.speed);
            textWriter.text.innerHTML = typing;
        }
        textWriter.isTyping = false;
    }

    async add(text) {
        textWriter.isTyping = true;
        const delay = ms => new Promise(res => setTimeout(res, ms));
        for (const i in text) {
            await delay(setting.print.speed);
            textWriter.text.innerHTML += text[i];
        }
        textWriter.isTyping = false;
    }

    async writeMologue(text) {
        textWriter.isTyping = true;
        let typing = '';
        const delay = ms => new Promise(res => setTimeout(res, ms));
        for (let i in text) {
            typing += text[i];
            await delay(setting.print.speed);
            textWriter.monologue.innerHTML = typing;
        }
        textWriter.isTyping = false;
    }

    async addMologue(text) {
        textWriter.isTyping = true;
        const delay = ms => new Promise(res => setTimeout(res, ms));
        for (const i in text) {
            await delay(setting.print.speed);
            textWriter.monologue.innerHTML += text[i];
        }
        textWriter.isTyping = false;
    }

    enable() {
        textWriter.enableDialog();
        textWriter.enableMologue();
    }

    disable() {
        textWriter.disableDialog();
        textWriter.disableMologue();
    }

    enableDialog() {
        textWriter.text.style.display = 'block';
        textWriter.talker.style.display = 'block';
    }

    disableDialog() {
        textWriter.text.style.display = 'none';
        textWriter.talker.style.display = 'none';
    }

    enableMologue() {
        textWriter.monologue.style.display = 'block';
    }

    disableMologue() {
        textWriter.monologue.style.display = 'none';
    }
}

class ChoiceController {
    constructor() {
        this.isChoicing = false;
        this.choiceElement = document.getElementById('choice');
    }

    showChoice(command) {
        choiceController.isChoicing = true;
        for (let i in command) {
            let element = document.createElement('button');
            let node = document.createTextNode([command[i].message]);
            element.onclick = () => {
                choiceController.removeChoices();
                notifyCenter.notifycation(NotificationName.select, command[i].to);
            };
            element.appendChild(node);
            choiceController.choiceElement.appendChild(element);
        }
    }

    removeChoices() {
        const children = this.choiceElement.children;
        while (children.length !== 0) {
            choiceController.choiceElement.removeChild(children[0]);
        }
        choiceController.isChoicing = false;
    }
}

class BGController {
    constructor() {
        this.path = 'url(assets/images/bgs/${replace}$)';
        this.backBg = document.getElementById('back_bg');
        this.frontBg = document.getElementById('front_bg');
        document.addEventListener("transitionend", this.endAnimation);
    }

    showBG(fileName) {
        let path = bgConrtoller.path.replace('${replace}$', fileName);
        bgConrtoller.backBg.style.backgroundImage = path;
        bgConrtoller.backBg.style.opacity = '1';
    }

    swapBG(newBGFileName) {
        bgConrtoller.frontBg.style.opacity = '0';
        let path = bgConrtoller.path.replace('${replace}$', newBGFileName);
        bgConrtoller.frontBg.style.backgroundImage = path;
        bgConrtoller.frontBg.style.opacity = '1';
    }

    endAnimation() {
        bgConrtoller.backBg.style.backgroundImage = bgConrtoller.frontBg.style.backgroundImage;
        bgConrtoller.frontBg.style.opacity = '0';
    }

    enable() {
        bgConrtoller.backBg.style.display = 'block';
        bgConrtoller.frontBg.style.display = 'block';
    }

    disable() {
        bgConrtoller.backBg.style.display = 'none';
        bgConrtoller.frontBg.style.display = 'none';
    }
}


let notifyCenter = new NotificationCenter();
let scriptController = new ScriptController(helloworld);
let choiceController = new ChoiceController();
let bgConrtoller = new BGController();
let textWriter = new TextWriter();

notifyCenter.addSubscriber(NotificationName.select, scriptController.jump);

export { notifyCenter, scriptController, choiceController, bgConrtoller, textWriter, NotificationName, ObjectPool };

