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
		adjustment: 0,
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
		adjustment: 0,
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
		text: `次の投下は16:50です`,
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