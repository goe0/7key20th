'use strict';

let works = [
	{
		id: `A`,
		music: `熱異常`,
		url: `https://chipstar64.sakura.ne.jp/danoni/danoni_Ha.html`,
		charts: [
			{name: `Very Hard`, level: 8},
		],
		adjustment: 0,
		artist: `いよわ<br>feat.足立レイ`,
		maker: `chip`,
		comment: `黒い星`,
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