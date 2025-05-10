'use strict';

let works = [
	{
		id: `A`,
		music: `熱異常`,
		url: `https://chipstar64.sakura.ne.jp/danoni/danoni_Ha.html`,
		charts: [
			{name: `Very Hard`, level: 7},
		],
		adjustment: 1,
		artist: `いよわ<br>feat.足立レイ`,
		maker: `chip`,
		comment: `黒い星`,
	},
	{
		id: `B`,
		music: `雫繰のゴシック`,
		url: `https://avectristesse.sakura.ne.jp/danoni/danoni/seven20th_SZ.html`,
		charts: [
			{name: `NORMAL`, level: -3},
			{name: `HYPER`, level: -6},
			{name: `ANOTHER`, level: -9},
		],
		adjustment: -1,
		artist: `ナナシ・ゴシック`,
		maker: `decresc.`,
		comment: `仄暗い研究室で一人佇む、水の魔女の研究成果。すべてを流し尽くす濁流を、打ち破れ──。`,
	},
	{
		id: `C`,
		music: `X-Y-Z "Tiny C mix"`,
		url: `https://cw7.sakura.ne.jp/danoni/2005/0017_X-Y-Z.html`,
		charts: [
			{name: `Easy`, level: -2},
			{name: `Normal`, level: -3},
			{name: `Hard`, level: -9},
		],
		adjustment: 0,
		artist: `Cranky`,
		maker: `ティックル`,
		comment: `20年前の作品の移植（＋α）です。`,
	},
	{
		id: `D`,
		music: `すい～ちゅパラダイス`,
		url: `http://onigiri.icekirby.net/danoni_2006/84_SwP.html`,
		charts: [
			{name: `Beginner`, level: -1},
			{name: `Light`, level: -3},
			{name: `Normal`, level: -4},
		],
		adjustment: 0,
		artist: `Y.W`,
		maker: `蒼宮あいす`,
		comment: `すぃ～ちゅなパラダイスです<br>
		移植作品＆リメイク<br>
		想定難易度：☆1/☆2/☆?`,
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
