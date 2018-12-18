"use strict";

// var engine = require('./engine');
import { Engine } from "./engine.js"
import script from './scripts.js'
import setting from './settings.js'

console.log(script);
console.log(setting);

let engine = new Engine(script, setting);
engine.start();
