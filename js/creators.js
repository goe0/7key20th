'use strict';

let creators = [
	/*
	{
		id: ,
		name: ``,
		url: ``,
		check: ,
		comment: ``,
	},
	*/
	{
		id: 23,
		name: `Peach Blossom`,
		url: `http://blossom130.g3.xrea.com/`,
		check: 1,
		comment: `7keyでもInsane`,
	},
	{
		id: 22,
		name: `eXisTrace`,
		url: ``,
		check: 1,
		comment: `お散歩日和`,
	},
	{
		id: 21,
		name: `apoi`,
		url: `https://apoi108.sakura.ne.jp/`,
		check: 1,
		comment: `間に合わせました。`,
	},
	{
		id: 20,
		name: `すずめ`,
		url: `https://suzume.kirara.st/`,
		check: 1,
		comment: `20周年おめでとうございます！！`,
	},
	{
		id: 19,
		name: `神屋裂龍牙`,
		url: `https://tseirproodni.sakura.ne.jp/`,
		check: 1,
		comment: `丁度187作目なので`,
	},
	{
		id: 18,
		name: `keen spring`,
		url: ``,
		check: 1,
		comment: `izk「7key20周年おめでとうございます。」<br>
			ショ「7key20周年おめでとうございます。」<br>
			izk「僕達からも作品をお贈りいたしますので、」<br>
			ショ「僕達からも作品をお贈りいたしますので、」<br>
			izk「どうぞお楽しみに！」<br>
			ショ「どうぞお楽しみに！」`,
	},
	{
		id: 17,
		name: `Reiage`,
		url: ``,
		check: 1,
		comment: `軌跡。`,
	},
	{
		id: 16,
		name: `ぽっつべサーカス団`,
		url: ``,
		check: 1,
		comment: `ぽっつべって何ですか？<br>
		<br>
		> Pop’nTubeは、YouTube動画で音楽ゲームを作って投稿できるサイトです。<br>
		> 投稿されたゲームステージはパソコンで遊ぶことができます。<br>
		> もちろん、遊ぶのも投稿するのも全て完全無料です。<br>
		（<a href="https://popntube.com/?page_id=60" target="_blank">https://popntube.com/?page_id=60</a> より)`,
	},
	{
		id: 15,
		name: `1ZiQ`,
		url: ``,
		check: 1,
		comment: `1譜面間に合わせました。対戦よろしくお願いします`,
	},
	{
		id: 14,
		name: `MFV2`,
		url: `https://mfv2.sakura.ne.jp/`,
		check: 1,
		comment: `このあと20時より「ダンシングおにぎり ワールド Direct」を放送します。<br>
		『ダンシングおにぎり ワールド』のくわしい情報をお届けします。放送時間は約15分です。`,
	},
	{
		id: 13,
		name: `ティックル`,
		url: `https://cw7.sakura.ne.jp/`,
		check: 1,
		comment: `20年が経ちましたが、7keyは楽しい！`,
	},
	{
		id: 12,
		name: `長月`,
		url: `http://ngtkdo.stars.ne.jp/`,
		check: 1,
		comment: `長月はSwitch 2をよそえませんでした`,
	},
	{
		id: 11,
		name: `SKB`,
		url: `https://superkuppabros.sakura.ne.jp/hp/`,
		check: 1,
		comment: `締切まであと1週間というデマに騙されました！<br>
		まだあと1ヶ月くらいありますよね？`,
	},
	{
		id: 10,
		name: `11ghts`,
		url: ``,
		check: 1,
		comment: `遥か190兆キロのボヤージュ`,
	},
	{
		id: 9,
		name: `o-cuRtaIn`,
		url: ``,
		check: 1,
		comment: `ダンおに劇場、5月3日開演。`,
	},
	{
		id: 8,
		name: `decresc.`,
		url: `https://avectristesse.sakura.ne.jp/`,
		check: 1,
		comment: `一流とそれ以外を分けるモノは<br>
		自身が持つ視点の数に他ならない。`,
	},
	{
		id: 7,
		name: `iskbic`,
		url: ``,
		check: 1,
		comment: `SKB「30分あれば実績50個解禁できる」<br>
		izkdic「1時間あれば発狂難易度表がなくても実績50個解禁できる」`,
	},
	{
		id: 6,
		name: `さよなら合作`,
		url: ``,
		check: 1,
		comment: `楽しかった旅路もこれが最後！<br>
			この思い出は一生の宝物！<br>
			皆との最高の経験を胸に刻んで！<br>
			ぼくたち！！<br>
			わたしたちは！！<br>
			さよならします！！！！！！！<br>`,
	},
	{
		id: 5,
		name: `chip`,
		url: `https://chipstar64.sakura.ne.jp/`,
		check: 1,
		comment: `チップシはヤジリン大会で頭ひねりまくりの音ゲーマーで、誕生日を7日間祝うぶっ飛び野郎だぜ！(Grok談)`,
	},
	{
		id: 4,
		name: `蒼とピンクに氷と風`,
		url: ``,
		check: 1,
		comment: `10年ぶりの新作合作です。`,
	},
	{
		id: 3,
		name: `Cie`,
		url: `https://terz3787.sakura.ne.jp/`,
		check: 1,
		comment: `キーボードスベスベマンジュウガニ`,
	},
	{
		id: 2,
		name: `蒼宮あいす`,
		url: `http://www.icekirby.net/`,
		check: 1,
		comment: `押しやすい某407作目でぃズな譜面になりますが、よろしくお願いいたします。`,
	},
	{
		id: 1,
		name: `goe`,
		url: `http://www.omission0.com/`,
		check: 1,
		comment: `皆様のご参加お待ちしております`,
	},
];

let asc = false;
let sorter = `id`;
const head = {
	id: {display: `No.`, sort: `id`},
	name: {display: `Name`, sort: `name`},
	check: {display: `Check`, sort: `check`},
	comment: {display: `Comment`, sort: `comment`},
};

window.addEventListener(`load`, _ => {
	createTable();
});

function sortTable(val) {
	asc = !asc;
	if (sorter !== val) asc = true;
	sorter = val;
	createTable();
}

function createTable() {
	let tableHTML = `<table><tr>`;

	Object.keys(head).forEach(column => {
		const sort = head[column].sort;
		const display = head[column].display;
		const tri = (sorter === sort) ? asc ? `▲` : `▼` : ``;
		tableHTML += `<th class="sortable ${column}Head" onclick="sortTable('${sort}')">${display} ${tri}</th>`;
	});

	tableHTML += `</tr>`;

	creators = creators.sort((a, b) => {
		if (a[sorter] === b[sorter]) return 0;
		if (asc) {
			return (a[sorter] > b[sorter]) ? 1 : -1;
		} else {
			return (a[sorter] > b[sorter]) ? -1 : 1;
		}
	});

	creators.forEach(creator => {
		const name = creator.url ? `<a href="${creator.url}" target="_blank">${creator.name}</a>` : creator.name;
		const check = (creator.check === 1) ? `✅` : (creator.check === 2) ? `👀` : (creator.check === 3) ? `❌` : ``;
		tableHTML += `<tr><td>${creator.id}</td><td>${name}</td><td>${check}</td><td class="comment">${creator.comment}</td></tr>`;
	});

	tableHTML += `</table>`;
	creatorsTable.innerHTML = tableHTML;
}
