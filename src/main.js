"use strict";

import ResourcePrelader from './resourcepreloader.js'
import { engine } from './engine.js'

let preloader = new ResourcePrelader();
preloader.preload(function() {
    engine.start();
});
