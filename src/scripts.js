"use strict";

const test = [
    {'block': {'name': 'start'}},
    {'bg': {'filename': 'art-gallery1.jpg'}},
    {'talk': {'talker': '테스트', 'message': '테스트입니다.테스트입니다.테스트입니다.테스트입니다.테스트입니다.'}},
    {'bgm': {'filename': 'Sad_Minuet.mp3'}},
    {'talk': {'talker': '마을사람A', 'message': '지나가는중...'}},
    {'sfx': {'filename': 'shooting_star.mp3'}},
    {'bg_change': {'filename': 'park_evening.png'}},
    {'add': {'message': '  이건 추가다아아아아아아아아아아ㅏ아아아아아아앙'}},
    {'choice': [{'message': '다시 처음으로', 'to': 'start'}, {'message': '이어서 ㄱ', 'to': 'end'}]},
    {'block': {'name': 'end'}},
    {'bg_change': {'filename': 'park_night.png'}},
    {'talk': {'talker': '', 'message': '근데 밤이네 할일이 없으니 다시 처음으로 ㄱ'}},
    {'jump': {'to': 'start'}}
];

const test2 = [

];

export { test, test2 };
