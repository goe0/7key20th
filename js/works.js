'use strict';

let works = [
	{
		text: `第一部 - 20th Anniversary -`,
		style: `border1`,
	},
	{
		id: 1,
		music: `ヒカリ`,
		url: `https://vorhandensein.sakura.ne.jp/danoni/392_hikari/`,
		charts: [
			{name: `20th`, level: -9},
			{name: `Anniversary`, level: -12},
		],
		adjustment: 0,
		artist: `四葉かげろう`,
		maker: `11ghts`,
		comment: `手と手重ねて掴み取れ<br>キミとボクだけのこのヒカリ――`,
	},
	{
		id: 2,
		music: `You and Me`,
		url: `http://ngtkdo.stars.ne.jp/danoni/280_youandme.html`,
		charts: [
			{name: `Normal`, level: -6},
		],
		adjustment: 2,
		artist: `しゃろう`,
		maker: `長月`,
		comment: `7key20周年おめでとうございます！`,
	},
	{
		id: 3,
		music: `Feel the Joy`,
		url: `http://onigiri.icekirby.net/danoni_2025/787_Feel_Joy.html`,
		charts: [
			{name: `Special`, level: -5},
		],
		adjustment: 0,
		artist: `MFP`,
		maker: `蒼とピンクと氷と風`,
		comment: `感じる喜び`,
	},
	{
		id: 4,
		music: `Windmill_Village`,
		url: `http://www.omission0.com/danoni/285-windmill/`,
		charts: [
			{name: `Normal`, level: -7},
			{name: `Hard`, level: -11},
		],
		adjustment: -1,
		artist: `PeriTune`,
		maker: `goe`,
		comment: `風車のある村`,
	},
	{
		id: 5,
		music: `Last Whisper (SLOS Arrange)`,
		url: `https://vorhandensein.sakura.ne.jp/danoni/391_whisper/`,
		charts: [
			{name: `Instrumental`, level: -7},
		],
		adjustment: 0,
		artist: `background`,
		maker: `iskbic`,
		comment: `最後には新しく生まれ変わって`,
	},
	{
		text: `第二部 - Let's go out -`,
		style: `border2`,
	},
	{
		id: 6,
		music: `Cloudless Sky`,
		url: `http://blossom130.g3.xrea.com/danoni/186/no186_Cloudless_Sky.html`,
		charts: [
			{name: `Easy(Lv.5)`, level: -2},
			{name: `Normal(Lv.14)`, level: -5},
		],
		adjustment: 2,
		artist: `MFP`,
		maker: `Peach Blossom`,
		comment: `快晴`,
	},
	{
		id: 7,
		music: `lingering song`,
		url: `https://vorhandensein.sakura.ne.jp/danoni/395_lingering/`,
		charts: [
			{name: `Linkage`, level: -6},
		],
		adjustment: 0,
		artist: `charly2`,
		maker: `eXisTrace`,
		comment: `いつまでもずっと続きますように`,
	},
	{
		id: 8,
		music: `雫の跡 (instrumental)`,
		url: `https://tseirproodni.sakura.ne.jp/danoni/101-200/HTML5/187/DropT.html`,
		charts: [
			{name: `20th`, level: -10},
		],
		adjustment: 1,
		artist: `ioni`,
		maker: `神屋裂龍牙`,
		comment: `あと20日で37歳も終わりか…`,
	},
	{
		id: 9,
		music: `ナイトスカイアドベンチャー`,
		url: `http://onigiri.icekirby.net/danoni_2025/792_NSA.html`,
		charts: [
			{name: `Light`, level: -2},
			{name: `Standard`, level: -4},
			{name: `Advanced`, level: -8},
		],
		adjustment: 0,
		artist: `優日のすたるじっく`,
		maker: `蒼宮あいす`,
		comment: `夜空の冒険792`,
	},
	{
		id: 10,
		music: `異星にいこうね`,
		url: `https://chipstar64.sakura.ne.jp/danoni/danoni_isei.html`,
		charts: [
			{name: `Hard`, level: 7},
		],
		adjustment: 1,
		artist: `いよわ feat.星界`,
		maker: `chip`,
		comment: `異星にいこうね`,
	},
	{
		text: `第三部 - Dance Floor -`,
		style: `border3`,
	},
	{
		id: 11,
		music: `金平糖の精の踊り`,
		url: `https://ccsyouta.sakura.ne.jp/danoni/308_konpe/itou.html`,
		charts: [
			{name: `20th`, level: 1},
		],
		adjustment: 0,
		artist: `Hupple`,
		maker: `o-cuRtaIn`,
		comment: `お菓子の国でのパーティー`,
	},
	{
		id: 12,
		music: `Boisterous Bee Dance`,
		url: `https://cw7.sakura.ne.jp/danoni/2025/0391_BoisterousBeeDance.html`,
		charts: [
			{name: `Easy`, level: -2},
			{name: `Normal`, level: -6},
			{name: `Hard`, level: -12},
		],
		adjustment: -1,
		artist: `Suno, Inc.`,
		maker: `ティックル`,
		comment: `🐝🐝🐝`,
	},
	{
		id: 13,
		music: `Love Song`,
		url: `http://onigiri.icekirby.net/danoni_2025/788_LS.html`,
		charts: [
			{name: `Standard`, level: -4},
			{name: `Advanced`, level: -8},
		],
		adjustment: 0,
		artist: `Kei Morimoto`,
		maker: `蒼宮あいす`,
		comment: `縦連ラブソング`,
	},
	{
		id: 14,
		music: `TYR`,
		url: `https://terz3787.sakura.ne.jp/danoni/tyr.html`,
		charts: [
			{name: `Extra`, level: 1},
		],
		adjustment: 1,
		artist: `Rune Caster`,
		maker: `Cie`,
		comment: `想い`,
	},
	{
		id: 15,
		music: `4小節ごとにジャンルが変わるUsagi Flap.Remix`,
		url: `https://mfv2.sakura.ne.jp/do/main/?id=4GenreUsagiFlap`,
		charts: [
			{name: `Normal`, level: -5},
			{name: `Hard`, level: -9},
			{name: `Extreme`, level: 2},
		],
		adjustment: 5,
		artist: `Se-U-Ra`,
		maker: `MFV2`,
		comment: `オニギリは踊らなくても弱らないそうですが……<br>
		私は、オニギリではありませんので。`,
	},
	{
		text: `第四部 - Boss Rush -`,
		style: `border4`,
	},
	{
		id: 16,
		music: `今週の敵は、てごわいな…`,
		url: `http://onigiri.icekirby.net/danoni_2025/789_tegowa.html`,
		charts: [
			{name: `Light`, level: -2},
			{name: `Advanced`, level: -7},
		],
		adjustment: -1,
		artist: `さんうさぎ`,
		maker: `蒼宮あいす`,
		comment: `今週のAP狙いは、てごわいな…`,
	},
	{
		id: 17,
		music: `Toravasami`,
		url: `https://apoi108.sakura.ne.jp/danoni/7key20th/toravasami.html`,
		charts: [
			{name: `Technical`, level: 10},
		],
		adjustment: -1,
		artist: `Nakaiankow`,
		maker: `apoi`,
		comment: `テクニカルな7keyを作りました。`,
	},
	{
		id: 18,
		music: `Hammer Girl`,
		url: `http://blossom130.g3.xrea.com/danoni/187/no187_Hammer.html`,
		charts: [
			{name: `Normal(Lv.11)`, level: -3},
			{name: `Violence(Lv.28)`, level: 2},
			{name: `<span class="small">Insane Hammer(Lv.31)</span>`, level: 9},
		],
		adjustment: 4,
		artist: `Dyglone`,
		maker: `Peach Blossom`,
		comment: `Hammer Lady`,
	},
	{
		id: 19,
		music: `逃避ケア`,
		url: `https://chipstar64.sakura.ne.jp/danoni/danoni_EfR.html`,
		charts: [
			{name: `Hard`, level: 3},
			{name: `Reality`, level: 15},
		],
		adjustment: 3,
		artist: `lumo feat.初音ミク`,
		maker: `chip`,
		comment: `ESCAPE FROM REALITY`,
	},
	{
		id: 20,
		music: `NIGHTMARE † CITY`,
		url: `http://www.omission0.com/danoni/287-nightmare/`,
		charts: [
			{name: `REQUIEM`, level: 16},
		],
		adjustment: -1,
		artist: `かめりあ`,
		maker: `goe`,
		comment: `†`,
	},
	{
		text: `第五部 - Rainbow Finale -`,
		style: `border5`,
	},
	{
		id: 21,
		music: `rainbow`,
		url: `http://www.omission0.com/danoni/286-rainbow/`,
		charts: [
			{name: `Hyper`, level: 3},
			{name: `Extreme`, level: 8},
		],
		adjustment: 0,
		artist: `ああああ`,
		maker: `goe`,
		comment: `７色の虹`,
	},
	{
		id: 22,
		music: `Phantasmagoria mystical expectation`,
		url: `https://superkuppabros.sakura.ne.jp/hp/danoni/danoni/phantasmagoria.html`,
		charts: [
			{name: `Easy`, level: -2},
			{name: `Normal`, level: -3},
			{name: `Hard`, level: -10},
			{name: `Lunatic`, level: 5},
		],
		adjustment: 1,
		artist: `IOSYS`,
		maker: `SKB`,
		comment: `七色の幻想へ`,
	},
	{
		id: 23,
		music: `七色の星が描いたキセキ`,
		url: `https://vorhandensein.sakura.ne.jp/danoni/394_nanairo/`,
		charts: [
			{name: `Sparkling`, level: -12},
		],
		adjustment: 0,
		artist: `ホーキー`,
		maker: `Reiage`,
		comment: `ユメの続きを探しに行こう`,
	},
	{
		id: 24,
		music: `虹`,
		url: `https://ccsyouta.sakura.ne.jp/danoni/300_clean_tears_no/niji.html`,
		charts: [
			{name: `Farewell`, level: -7},
		],
		adjustment: 0,
		artist: `Clean Tears`,
		maker: `さよなら合作`,
		comment: `７弦の虹<br>７番の虹<br>７鍵の虹<br>７人の虹`,
	},
	{
		text: `最終部 - 7key Festival -`,
		style: `border6`,
	},
	{
		id: 25,
		music: `キミトミライヘ (2020 mix)`,
		url: `https://superkuppabros.sakura.ne.jp/hp/danoni/danoni/kimitomirai.html`,
		charts: [
			{name: `Magic`, level: -10},
		],
		adjustment: 1,
		artist: `Capchii`,
		maker: `ぽっつべサーカス団`,
		comment: `魔法をかけて 描いた夢は<br>
			もうすぐそこにある 希望が輝く`,
	},
	{
		id: 26,
		music: `Resvelia`,
		url: `https://avectristesse.sakura.ne.jp/danoni/danoni/seven20th_RV.html`,
		charts: [
			{name: `NORMAL`, level: -2},
			{name: `HYPER`, level: -5},
			{name: `ANOTHER`, level: -5},
			{name: `LEGGENDARIA`, level: -7},
		],
		adjustment: -1,
		artist: `MALVA. feat.a-m`,
		maker: `decresc.`,
		comment: `遠くの世界まで追い続け　夢の彼方へ回帰をする—─。`,
	},
	{
		id: 27,
		music: `蘇芳天衣`,
		url: `https://apoi108.sakura.ne.jp/danoni/1ziq_suou_ten-i/`,
		charts: [
			{name: `八尺瓊勾玉`, level: 12},
		],
		adjustment: 7,
		artist: `Camellia`,
		maker: `1ZiQ`,
		comment: `20周年ということである程度のスコアまでは出るけど一定以上が全く伸びないタイプの譜面を作ろう！
		ということで頑張りました。ラスサビの乱打は私の地力ではある程度は見えても完全には見えません。頑張ってください。`,
	},
	{
		id: 28,
		music: `星空のさきへ`,
		url: `http://onigiri.icekirby.net/danoni_2025/790_Hoshizora.html`,
		charts: [
			{name: `Advanced`, level: -8},
		],
		adjustment: 0,
		artist: `Sakura Notes`,
		maker: `蒼宮あいす`,
		comment: `8分乱打型の星空`,
	},
	{
		id: 29,
		music: `地球の裏`,
		url: `https://chipstar64.sakura.ne.jp/danoni/danoni_LTBE.html`,
		charts: [
			{name: `Very Hard`, level: 7},
		],
		adjustment: 2,
		artist: `いよわ feat.裏命`,
		maker: `chip`,
		comment: `地球の裏にいこうね`,
	},
	{
		id: 30,
		music: `言霊リフレイン`,
		url: `https://ccsyouta.sakura.ne.jp/danoni/310_kotodama/refrain.html`,
		charts: [
			{name: `Spiritual`, level: -8},
		],
		adjustment: 0,
		artist: `tokiwa<br>feat. 中村さんそ`,
		maker: `keen spring`,
		comment: `季節は巡り、世界は回る`,
	},
	{
		id: 31,
		music: `ラペペペ`,
		url: `https://suzume.kirara.st/lapaixpaixpaix/`,
		charts: [
			{name: `Extreme`, level: 2},
		],
		adjustment: 1,
		artist: `Inagi`,
		maker: `すずめ`,
		comment: `最強の安息を！`,
	},
	{
		id: 32,
		music: `Seven Colors`,
		url: `https://superkuppabros.sakura.ne.jp/hp/danoni/danoni/seven_colors.html`,
		charts: [
			{name: `Normal`, level: -4},
		],
		adjustment: 1,
		artist: `yu-mi`,
		maker: `SKB`,
		comment: `探してくんだ 自分の色`,
	},
	{
		text: `全ての投下が終了しました！お疲れ様でした！`,
		style: `border0`,
	},
];

const head = {
	id: {display: `No.`},
	music: {display: `Title`},
	level: {display: `Level`},
	maker: {display: `Maker`},
	artist: {display: `Artist`},
	adjustment: {display: `Adj.`},
};

window.addEventListener(`load`, _ => {
	let tableHTML = `<table><tr>`;

	Object.keys(head).forEach(column => {
		const display = head[column].display;
		tableHTML += `<th class="${column}Head">${display}</th>`;
	});

	tableHTML += `</tr>`;

	works.forEach(work => {
		if (work.music) {
			const title = `<a href="${work.url}" target="_blank">${work.music}</a>`;
			const rowspan = work.charts.length;
			const star = level => {
				return (level > 0) ? `★${level}` : `☆${-level}`;
			};
			tableHTML += `<tr><td rowspan="${rowspan + 1}">${work.id}</td><td rowspan="${rowspan}">${title}</td>
				<td class="chart"><span class="level">${star(work.charts[0].level)}</span>${work.charts[0].name}</td>
				<td rowspan="${rowspan}">${work.maker}</td><td rowspan="${rowspan}">${work.artist}</td><td rowspan="${rowspan}">${work.adjustment}</td></tr>`;

			if (rowspan > 1) {
				work.charts.forEach((chart, i) => {
					if (i !== 0) {
						tableHTML += `<tr><td class="chart chart2"><span class="level">${star(chart.level)}</span>${chart.name}</td></tr>`;
					}
				});
			}

			tableHTML += `<tr><td colspan="7" class="comment">${work.comment}</td></tr>`;
		} else {
			tableHTML += `<tr><td colspan="8" class="border ${work.style}">${work.text}</td></tr>`;
		}
	});

	tableHTML += `</table>`;
	worksTable.innerHTML = tableHTML;
});
