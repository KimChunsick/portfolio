"use strict";

import ResourcePrelader from './resourcepreloader.js'
import { Engine } from './engine.js'
import { test, test2 } from './scripts.js'
import setting from './settings.js'

let engine = new Engine(test, setting);
// engine.start();
let preloader = new ResourcePrelader();
preloader.preload(function() {
    engine.start();
});
