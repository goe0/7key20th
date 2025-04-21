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
