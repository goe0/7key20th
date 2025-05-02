'use strict';

function check() {
  let point = 0;
  const answer = [`d`, `a`, `b`, `b`, `a`, `d`, `c`, `b`, `b`, `b`];
  const comment = [
    `逆に全問不正解なら何かあるかと思って試してみたのでしょうが、何もないですよ。`,
    `すみません。ちょっと難しすぎましたか？`,
    `正解率20%！4択なので適当に選んだほうがマシ！`,
    `これを機に7keyへの理解を深めていただけると嬉しいです。`,
    `もうちょっとで半分でしたね。`,
    `ちょうど半分正解です。可もなく不可もなく。`,
    `そこそこやりますね`,
    `7keyクイズで7問正解！これはこれですごい。`,
    `かなり7keyに詳しいようですね。すごい！`,
    `あと一問！惜しい！`,
    `全問正解おめでとうございます！7key博士のあなたに<a href="http://www.omission0.com/danoni/284-amanatsu/" target="_blank">賞品</a>を用意しました！`,
  ];

  for (let i = 1; i <= 10; i++) {
    const correct = document.getElementById(`q${i}${answer[i - 1]}`);
    if (correct.checked) {
      document.getElementById(`answer${i}`).innerHTML = `⭕`;
      point++;
    } else {
      document.getElementById(`answer${i}`).innerHTML = `❌`;
    }
  }

  score.innerHTML = `10問中<span class="point">${point}</span>問正解！`;
  detail.innerHTML = comment[point];
}
