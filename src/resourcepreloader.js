"use strict";

class ResourcePreloader {
    constructor() {
        this.targets = [
            'assets/images/bgs/park_afternoon.png',
            'assets/images/bgs/park_evening.png',
            'assets/images/bgs/park_night.png',
            'assets/images/bgs/art-gallery1.jpg',
            'assets/images/bgs/art-gallery2.jpg',
            'assets/sounds/bgm/Sad_Minuet.mp3',
            'assets/sounds/sfx/shooting_star.mp3',
        ];

        this.preloadPromises = [];
        this.loadingSection = document.getElementsByClassName('loading')[0];
        this.progress = document.getElementById('loading_progress');
        this.progress.setAttribute('max', this.targets.length.toString());
    }

    preload(callback) {
        for (let i in this.targets) {
            let path = this.targets[i];
            // console.log(typeof target);
            if (path.includes('sounds')) {
                this.preloadPromises.push(this.loadAudio(path));
            } else if (path.includes('images')) {
                this.preloadPromises.push(this.loadImage(path));
            }
        }

        const self = this;
        Promise.all(this.preloadPromises).then(function () {
            setTimeout(function () {
                console.log('로딩 종료.');
                self.progress.hidden = true;
                self.loadingSection.hidden = true;
                callback();
            }, 1000);
        }).catch (function (error) {
            console.error(error);
        });
    }

    loadImage(path) {
        const self = this;
        return new Promise(function (resolve, reject) {
            const image = new Image();
            image.onload  = function () {
                const currentValue = parseInt(self.progress.value);
                self.progress.value = (currentValue + 1);
                resolve();
            };
            image.onerror = function (error) {
                const currentValue = parseInt(self.progress.value);
                self.progress.value = (currentValue + 1);
                reject(error);
            };
            image.src = path;
        });
    }

    loadAudio(path) {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('GET', path);
            request.onload = function() {
                resolve();
            };
            request.onerror = function(error) {
                console.log(error);
                reject(error);
            };
            request.send();
        });
    }
}

export default ResourcePreloader;
