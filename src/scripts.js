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
    {'bg': {'filename': 'art-gallery2.jpg'}},
    {'monologue': {'message': '해당 사이트는 Chrome으로 보실 것을 권장합니다.'}},
    {'bgm': {'filename': 'Sad_Minuet.mp3'}},
    {'talk': {'talker': '', 'message': '정신을 차려보니 품격있는 클래식이 재생되고 있다.'}},
    {'talk': {'talker': '', 'message': '여기에 어떻게 왔는지 기억이 나지 않는다.'}},
    {'add': {'message': ' 하지만 눈앞에 펼쳐진 유사 고품격 포트폴리오들을 보고나니 이곳에 오길 잘했다는 생각이 든다.'}},
    {'talk': {'talker': '낯선 여자', 'message': '유사 고품격 포트폴리오 미술관에 오신걸 환영합니다.'}},
    {'talk': {'talker': '김안내원', 'message': '저는 관람객님의 옆에서 포트폴리오의 설명을 담당하고 있는 김안내원입니다.'}},
    {'talk': {'talker': '김안내원', 'message': '포트폴리오는 크게'}},
    {'add': {'message': ' Game,'}},
    {'add': {'message': ' iOS,'}},
    {'add': {'message': ' Web'}},
    {'add': {'message': '으로 구성되어있습니다.'}},
    {'talk': {'talker': '안내원', 'message': '어느 곳을 둘러보시겠습니까?'}},
    {
        'choice': [
            {'message': 'Game', 'to': 'game'},
            {'message': 'iOS', 'to': 'ios'},
            {'message': 'Web', 'to': 'web'},
        ]
    },
    {'block': {'name': 'game'}},
    {'script': {'name': 'game'}},
    {'block': {'name': 'ios'}},
    {'script': {'name': 'ios'}},
    {'block': {'name': 'web'}},
    {'script': {'name': 'web'}},
];

const game = [
    {'block': {'name': 'start'}},
    {'bg': {'filename': 'art-gallery1.jpg'}},
    {'talk': {'talker': '김안내원', 'message': '이곳은 게임 포트폴리오 전시관입니다.'}},
    {'talk': {'talker': '김안내원', 'message': '마치 역동적이고, 창조적인 비디오 아트를 보는 듯 합니다.'}},
    {'talk': {'talker': '김안내원', 'message': '게임 전시관의 작품은 총 1가지가 있습니다.'}},
    {'add': {'message': ' 설명을 원하시는 작품을 소개해드리겠습니다.'}},
    {
        'choice': [
            {'message': 'LittleBrother 2984', 'to': 'LB2984'},
        ]
    },
    {'block': {'name': 'LB2984'}},
    {'talk': {'talker': '김안내원', 'message': '감이 좋으시군요.'}},
    {'talk': {'talker': '김안내원', 'message': 'LittleBrother 2984는 CodeVillain의 작품중에서도 손꼽히는 작품입니다.'}},
    // {'talk': {'talker': '김안내원', 'message': '2984년, Utopia라는 행성으로 이주한 인류는 그곳에 이미 있던 종족들과 공존하게 됩니다.'}},
    // {'talk': {'talker': '김안내원', 'message': '이 Utopia행성은, 모든 결정을 행성 주민들의 투표로 진행합니다.'}},
    // {'talk': {'talker': '김안내원', 'message': '플레이어는 수많은 종족중 하나의 개체로서 투표를 진행하며 스토리를 진행하는 방식입니다.'}},
    {'talk': {'talker': '김안내원', 'message': '백남준 아트센터에서 진행한 ArtGameJam에서 상을 수상한 작품으로, '}},
    {'add': {'message': ' 2018년 4월, 독일 A-MAZE 게임쇼에서 전시도 진행하였습니다.'}},
    {'talk': {'talker': '김안내원', 'message': '제작연도는 2017년 이며 Unity엔진을 이용해 개발되었습니다.'}},
    {'talk': {'talker': '김안내원', 'message': '투표 시스템, TV채널 콘텐츠 구현을 담당했습니다.'}},
    {'talk': {'talker': '김안내원', 'message': '다른 작품들을 둘러보실건가요?'}},
    {
        'choice': [
            {'message': '게임 전시관으로 돌아간다.', 'to': 'start'},
            {'message': '정신을 잃는다.', 'to': 'return'},
        ]
    },
    {'block': {'name': 'return'}},
    {'script': {'name': 'helloworld'}},
];

const ios = [
    {'block': {'name': 'start'}},
    {'bg': {'filename': 'art-gallery1.jpg'}},
];

const web = [
    {'block': {'name': 'start'}},
    {'bg': {'filename': 'art-gallery1.jpg'}},
];

const scripts = {
    'test': test,
    'helloworld': helloworld,
    'game': game,
    'ios': ios,
    'web': web,
};

export default scripts;
