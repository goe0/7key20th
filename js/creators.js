'use strict';

let creators = [
	/*
	{
		id: ,
		name: ``,
		url: ``,
		check: 1,
		comment: ``,
	},
	*/
	{
		id: 1,
		name: `goe`,
		url: `http://www.omission0.com/`,
		check: 1,
		comment: `祭りはゴールであり、またスタートでもある。`,
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
		tableHTML += `<th class="sortable ${column}" onclick="sortTable('${sort}')">${display} ${tri}</th>`;
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
		const name = creator.url ? `<a href="${creator.url}">${creator.name}</a>` : creator.name;
		const check = (creator.check === 1) ? `✅` : (creator.check === 2) ? `👀` : (creator.check === 3) ? `❌` : ``;
		tableHTML += `<tr><td>${creator.id}</td><td>${name}</td><td>${check}</td><td>${creator.comment}</td></tr>`;
	});

	tableHTML += `</table>`;
	creatorsTable.innerHTML = tableHTML;
}