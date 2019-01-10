"use strict";

const test = [
    {'block': {'name': 'start'}},
    {'bg': {'filename': 'art-gallery2.jpg'}},
    {'talk': {'talker': '테스트', 'message': '테스트입니다.테스트입니다.테스트입니다.테스트입니다.테스트입니다.'}},
    {'bgm': {'filename': 'Sad_Minuet.mp3'}},
    {'monologue': {'message': '하! 히! 후! 헤! 호!로요이'}},
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

const helloworld = [
    {'block': {'name': 'start'}},
    {'bgm': {'filename': 'Sad_Minuet.mp3'}},
    {'monologue': {'message': '어쩌다 이 미술관에 오게 되었는지는 기억나지 않는다.'}},
    {'bg': {'filename': 'art-gallery2.jpg'}},
    {'add': {'message': ' 하지만 눈앞에 펼쳐진 유사 고품격 포트폴리오들을 보고나니 이곳에 오길 잘했다는 생각이 든다.'}},
    {'talk': {'talker': '안내원', 'message': '유사 고품격 포트폴리오 미술관에 오신걸 환경합니다.'}},
    {'talk': {'talker': '안내원', 'message': '저는 관람객님의 옆에서 포트폴리오의 설명을 담당하고 있는 김안내원입니다.'}},
    {'talk': {'talker': '안내원', 'message': '포트폴리오는 크게'}},
    {'add': {'message': ' Game,'}},
    {'add': {'message': ' iOS,'}},
    {'add': {'message': ' Web'}},
    {'add': {'message': '으로 구성되어있습니다.'}},
    {'talk': {'talker': '안내원', 'message': '어느곳을 둘러보시겠습니까?'}},
    {
        'choice': [
            {'message': 'Game', 'to': ''},
            {'message': 'iOS', 'to': ''},
            {'message': 'Web', 'to': ''},
        ]
    },
];

export { test, helloworld };
