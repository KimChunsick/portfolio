"use strict";

import { test, test2 } from "./scripts.js";

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
        this.bgs = document.getElementById('bgs');

    }

    showBG() {

    }

    swapBG() {

    }
}


let notifyCenter = new NotificationCenter();
let scriptController = new ScriptController(test);
let choiceController = new ChoiceController();
let bgConrtoller = new BGController();

notifyCenter.addSubscriber(NotificationName.select, scriptController.jump);

export { notifyCenter, scriptController, choiceController, bgConrtoller, NotificationCenter, NotificationName, ObjectPool };

