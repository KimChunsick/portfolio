const keys = {
	monologue: 'monologue',
	bg: 'bg',
	bgm: 'bgm',
	block: 'block',
	choices: 'choices',
	guide: 'guide',
	show: 'show',
	hide: 'hide',
	jump: 'jump',
	name: 'name',
	sfx: 'sfx',
	talk: 'talk',
	addTalk: 'add-talk'
}

// PROPLOGUE
const prologue = [
	{
		key: keys.monologue,
		value: 'Chrome 브라우저로 감상하시는 것을 권장합니다.'
	},
	{ key: keys.bg, value: 'art-gallery-hall' },
	{ key: keys.bgm, value: 'Sad_Minuet' },
	{
		key: keys.name,
		value: '나',
		color: 'white'
	},
	{ key: keys.talk, value: '머리가 깨질 듯이 아프다.' },
	{ key: keys.addTalk, value: ' 어쩌다 이곳에 왔는지 기억나지 않는다.' },
	{
		key: keys.talk,
		value:
			'다만, 눈앞에 있는 화려한 인테리어를 보니 이곳에 오길 잘했다는 생각만이 머리를 스쳐 지나간다.'
	},
	{
		key: keys.name,
		value: '???',
		color: '#9775fa'
	},
	{ key: keys.guide, value: 'idle' },
	{
		key: keys.talk,
		value: '유사 고품격 포트폴리오 갤러리에 오신 것을 환영합니다.'
	},
	{
		key: keys.choices,
		value: [
			{ text: '누구인지 묻는다.', value: 'who_are_you' },
			{ text: '이곳은 어디인지 묻는다.', value: 'where_am_i' }
		]
	},
	{ key: keys.block, value: 'who_are_you' },
	{
		key: keys.name,
		value: '나',
		color: 'white'
	},
	{ key: keys.talk, value: '당신은.. 누구십니까?' },
	{
		key: keys.name,
		value: '안내원',
		color: '#9775fa'
	},
	{
		key: keys.talk,
		value:
			'아! 제 소개가 늦었군요. 저는 이 갤러리에서 작품 설명을 담당하고 있습니다. 편하게 안내원이라고 부르시면 됩니다.'
	},
	{
		key: keys.name,
		value: '나',
		color: 'white'
	},
	{
		key: keys.talk,
		value: '아 그렇군요.. 만나서 반갑습니다. 그런데 이곳은 어딥니까?'
	},
	{
		key: keys.name,
		value: '안내원',
		color: '#9775fa'
	},
	{
		key: keys.talk,
		value:
			'이곳의 원장님이신 방춘덕님의 포트폴리오 갤러리입니다. 총 3개의 관람 구역으로 나뉘어 있으며 이곳은 현재 메인홀입니다.'
	},
	{ key: keys.jump, value: 'after_first_meet' },
	{ key: keys.block, value: 'where_am_i' },
	{
		key: keys.name,
		value: '나',
		color: 'white'
	},
	{ key: keys.talk, value: '이곳은.. 어딥니까?' },
	{
		key: keys.name,
		value: '???',
		color: '#9775fa'
	},
	{
		key: keys.talk,
		value:
			'이곳의 원장님이신 방춘덕님의 포트폴리오 갤러리입니다. 총 3개의 관람 구역으로 나뉘어 있으며 이곳은 현재 메인홀입니다.'
	},
	{
		key: keys.name,
		value: '나',
		color: 'white'
	},
	{
		key: keys.talk,
		value: '아 그렇군요.. 그런데 당신은 누구십니까?'
	},
	{
		key: keys.name,
		value: '안내원',
		color: '#9775fa'
	},
	{
		key: keys.talk,
		value:
			'아! 제 소개가 늦었군요. 저는 이 갤러리에서 작품 설명을 담당하고 있습니다. 편하게 안내원이라고 부르시면 됩니다.'
	},
	{ key: keys.jump, value: 'after_first_meet' },
	{ key: keys.block, value: 'after_first_meet' },
	{
		key: keys.name,
		value: '안내원',
		color: '#9775fa'
	},
	{
		key: keys.talk,
		value: '그런 것보다...'
	},
	{
		key: keys.addTalk,
		value: ' 마침 갤러리에 오셨는데 포트폴리오를 관람하시는 건 어떻습니까?'
	},
	{
		key: keys.monologue,
		value:
			'내 질문들에 교묘하게 대답했지만, 중요하지는 않은 것 같다. 내 머릿속은 무언가에 이끌린 듯이 어서 포트폴리오를 관람하고 싶다는 생각뿐이다.'
	},
	{
		key: keys.name,
		value: '나',
		color: 'white'
	},
	{
		key: keys.talk,
		value: '알겠습니다. 어느 구역부터 구경할 수 있습니까?'
	},
	{
		key: keys.name,
		value: '안내원',
		color: '#9775fa'
	},
	{
		key: keys.talk,
		value: '잘 생각하셨습니다. Web, iOS, Game등의 관람구역이 있습니다.'
	},
	{
		key: keys.talk,
		value: '어느 곳을 관람하시겠습니까?'
	},
	{
		key: keys.choices,
		value: [
			{ text: 'Web', value: 'web' },
			{ text: 'iOS', value: 'ios' },
			{ text: 'Game', value: 'game' }
		]
	}
]

// MAIN HALL
const mainHall = [
	{ key: keys.block, value: 'main-hall' },
	{ key: keys.bg, value: 'art-gallery-hall' },
	{ key: keys.bgm, value: 'Sad_Minuet' },
	{ key: keys.sfx, value: 'Walk_On_Concrete' },
	{
		key: keys.name,
		value: '안내원',
		color: '#9775fa'
	},
	{
		key: keys.talk,
		value: '그럼, 어느 곳을 관람하시겠습니까?'
	},
	{
		key: keys.choices,
		value: [
			{ text: 'Web', value: 'web' },
			{ text: 'iOS', value: 'ios' },
			{ text: 'Game', value: 'game' }
		]
	}
]

// WEB
const web = [
	{ key: keys.block, value: 'web' },
	{ key: keys.sfx, value: 'Walk_On_Concrete' },
	{ key: keys.bg, value: 'art-gallery1' },
	{
		key: keys.name,
		value: '안내원',
		color: '#9775fa'
	},
	{
		key: keys.talk,
		value:
			'이곳은 Web 구역으로써, 그동안 원장님께서 작업하신 결과물들이 전시되어 있는 곳입니다.'
	},
	{ key: keys.block, value: 'web-ask' },
	{ key: keys.hide },
	{
		key: keys.talk,
		value: '어떤 전시물의 설명을 원하십니까?'
	},
	{
		key: keys.choices,
		value: [
			{ text: '이력서', value: 'resume' },
			{ text: '포트폴리오', value: 'portfolio' },
			{ text: '메인홀로 돌아가기', value: 'main-hall' }
		]
	},
	{ key: keys.block, value: 'resume' },
	{ key: keys.show, value: 'resume1' },
	{
		key: keys.name,
		value: '안내원',
		color: '#9775fa'
	},
	{
		key: keys.talk,
		value:
			'이력서 페이지는 원장님의 그동안의 이력을 표현하기 위해 제작한 페이지 입니다.'
	},
	{
		key: keys.talk,
		value: '제작 당시 유행하던 neumorphism 디자인을 차용해 제작하셨습니다.'
	},
	{
		key: keys.talk,
		value:
			'vuejs를 활용해 제작하셨으며, atomic design으로 컴포넌트를 설계하셨습니다.'
	},
	{
		key: keys.talk,
		value: '설명은 여기까지 입니다.'
	},
	{
		key: keys.name,
		value: '나',
		color: 'white'
	},
	{
		key: keys.talk,
		value: '의외로 짧군요. 직접 볼 수 있는 방법이 있습니까?'
	},
	{
		key: keys.name,
		value: '안내원',
		color: '#9775fa'
	},
	{
		key: keys.talk,
		value:
			'물론입니다. https://bangchundeok.github.io/resume/에서 확인 가능하십니다.'
	},
	{ key: keys.jump, value: 'web-ask' },
	{ key: keys.block, value: 'portfolio' },
	{
		key: keys.name,
		value: '안내원',
		color: '#9775fa'
	},
	{
		key: keys.talk,
		value: '이 갤러리가 바로 원장님이 직접 설계하고 제작한 포트폴리오입니다.'
	},
	{
		key: keys.talk,
		value: '다른 기술 없이 vanilla js를 이용해서만 제작하셨습니다.'
	},
	{
		key: keys.talk,
		value: '한정된 리소스의 특성상 부족함이 많지만 재밌게 즐겨주시길 바랍니다.'
	},
	{ key: keys.jump, value: 'web-ask' }
]

// iOS
const ios = [
	{ key: keys.block, value: 'ios' },
	{ key: keys.sfx, value: 'Walk_On_Concrete' },
	{ key: keys.bg, value: 'art-gallery2' },
	{ key: keys.name, value: '원장 (방춘덕)', color: 'red' },
	{
		key: keys.talk,
		value: '현재 개발중입니다.'
	},
	{ key: keys.jump, value: 'main-hall' }
]

// GAME
const game = [
	{ key: keys.block, value: 'game' },
	{ key: keys.sfx, value: 'Walk_On_Concrete' },
	{ key: keys.bg, value: 'art-gallery3' },
	{ key: keys.name, value: '원장 (방춘덕)', color: 'red' },
	{
		key: keys.talk,
		value: '현재 개발중입니다.'
	},
	{ key: keys.jump, value: 'main-hall' }
]

export default [...prologue, ...mainHall, ...web, ...ios, ...game]
