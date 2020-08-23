export default [
	{ key: 'monologue', value: 'Chrome 브라우저로 보시는 것을 권장합니다.' },
	{ key: 'bg', value: 'art-gallery-hall' },
	{ key: 'bgm', value: 'Sad_Minuet' },
	{
		key: 'name',
		value: '나',
		color: 'white'
	},
	{ key: 'talk', value: '머리가 깨질 듯이 아프다.' },
	{ key: 'add-talk', value: ' 어쩌다 이곳에 왔는지 기억나지 않는다.' },
	{
		key: 'talk',
		value:
			'다만, 눈앞에 있는 화려한 인테리어를 보니 이곳에 오길 잘했다는 생각만이 머리를 스쳐 지나간다.'
	},
	{
		key: 'name',
		value: '???',
		color: '#9775fa'
	},
	{ key: 'guide', value: 'idle' },
	{
		key: 'talk',
		value: '유사 고품격 포트폴리오 갤러리에 오신 것을 환영합니다.'
	},
	{
		key: 'choices',
		value: [
			{ text: '누구인지 묻는다.', value: 'who_are_you' },
			{ text: '이곳은 어디인지 묻는다.', value: 'where_am_i' }
		]
	},
	{ key: 'block', value: 'who_are_you' },
	{
		key: 'name',
		value: '나',
		color: 'white'
	},
	{ key: 'talk', value: '당신은.. 누구시죠?' },
	{
		key: 'name',
		value: '안내원',
		color: '#9775fa'
	},
	{
		key: 'talk',
		value:
			'아! 제 소개가 늦었군요. 저는 이 갤러리의 안내원입니다. 편하게 안내원이라고 부르시면 됩니다.'
	},
	{
		key: 'name',
		value: '나',
		color: 'white'
	},
	{
		key: 'talk',
		value: '아 그렇군요.. 만나서 반갑습니다. 그런데 이곳은 어딥니까?'
	},
	{
		key: 'name',
		value: '안내원',
		color: '#9775fa'
	},
	{
		key: 'talk',
		value:
			'이곳은 누군가의 유사 고품격 포트폴리오가 전시된 곳입니다. 총 3개의 관람 구역으로 나뉘어 있으며 이곳은 현재 메인홀입니다.'
	},
	{ key: 'jump', value: 'after_first_meet' },
	{ key: 'block', value: 'where_am_i' },
	{
		key: 'name',
		value: '나',
		color: 'white'
	},
	{ key: 'talk', value: '이곳은.. 어딥니까?' },
	{
		key: 'name',
		value: '???',
		color: '#9775fa'
	},
	{
		key: 'talk',
		value:
			'이곳은 누군가의 유사 고품격 포트폴리오가 전시된 곳입니다. 총 3개의 관람구역으로 나뉘어 있으며 이곳은 현재 메인홀입니다.'
	},
	{
		key: 'name',
		value: '나',
		color: 'white'
	},
	{
		key: 'talk',
		value: '아 그렇군요.. 그런데 당신은 누구시죠?'
	},
	{
		key: 'name',
		value: '안내원',
		color: '#9775fa'
	},
	{
		key: 'talk',
		value:
			'아! 제 소개가 늦었군요. 저는 이 갤러리의 안내원입니다. 편하게 안내원이라고 부르시면 됩니다.'
	},
	{ key: 'jump', value: 'after_first_meet' },
	{ key: 'block', value: 'after_first_meet' },
	{
		key: 'name',
		value: '안내원',
		color: '#9775fa'
	},
	{
		key: 'talk',
		value: '그런 것보다...'
	},
	{
		key: 'add-talk',
		value: ' 마침 갤러리에 오셨는데 포트폴리오를 관람하시는 건 어떻습니까?'
	},
	{
		key: 'monologue',
		value:
			'내 질문들에 교묘하게 대답했지만, 중요하지는 않은 것 같다. 내 머릿속은 무언가에 이끌린 듯이 어서 포트폴리오를 관람하고 싶다는 생각뿐이다.'
	},
	{
		key: 'name',
		value: '나',
		color: 'white'
	},
	{
		key: 'talk',
		value: '알겠습니다. 어느 구역부터 구경할 수 있습니까?'
	},
	{
		key: 'name',
		value: '안내원',
		color: '#9775fa'
	},
	{
		key: 'talk',
		value: '잘 생각하셨습니다. Web, iOS, Game등의 관람구역이 있습니다.'
	},
	{
		key: 'talk',
		value: '어느 곳을 관람하시겠습니까?'
	},
	{
		key: 'choices',
		value: [
			{ text: 'Web', value: 'web' },
			{ text: 'iOS', value: 'ios' },
			{ text: 'Game', value: 'game' }
		]
	},
	{ key: 'block', value: 'web' },
	{ key: 'sfx', value: 'Walk_On_Concrete' },
	{ key: 'block', value: 'ios' },
	{ key: 'sfx', value: 'Walk_On_Concrete' },
	{ key: 'block', value: 'game' },
	{ key: 'sfx', value: 'Walk_On_Concrete' }
]
