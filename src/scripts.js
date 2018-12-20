"use strict";

const test = [
    {'block': {'name': 'start'}},
    {'bgm': {'filename': 'Zombie_March.mp3'}},
    {'talk': {'talker': '테스트', 'message': '테스트입니다.테스트입니다.테스트입니다.테스트입니다.테스트입니다.'}},
    {'sfx': {'filename': 'shooting_star.mp3'}},
    {'talk': {'talker': '마을사람A', 'message': '지나가는중...'}},
    {'add': {'message': '   이건 추가다아아아아아아아아아아ㅏ아아아아아아앙'}},
    {'choice': [{'message': '다시 처음으로', 'to': 'start'}, {'message': '이어서 ㄱ', 'to': 'end'}]},
    {'block': {'name': 'end'}},
    {'talk': {'talker': '', 'message': '근데 할말이 없네 다시 처음으로 ㄱ'}},
    {'jump': {'to': 'start'}}
];

const test2 = [

];

export { test, test2 };
