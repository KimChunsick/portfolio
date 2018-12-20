"use strict";

const test = [
    {'block': {'name': 'start'}},
    {'talk': {'talker': '테스트', 'message': '테스트입니다.테스트입니다.테스트입니다.테스트입니다.테스트입니다.'}},
    {'talk': {'talker': '마을사람A', 'message': '지나가는중...'}},
    {'add': {'message': '   이건 추가다아아아아아아아아아아ㅏ아아아아아아앙'}},
    {'choice': [{'to': 'start', 'message': '다시 처음으로'}, {'to': 'end', 'message': '이어서 ㄱ'}]},
    {'block': {'name': 'end'}},
    {'talk': {'talker': '', 'message': '근데 할말이 없네 다시 처음으로 ㄱ'}},
    {'jump': {'to': 'start'}}
];

export default test;
