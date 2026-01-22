// --- 猫セクション ---
const thecatName = "ごまちゃん";
function makeSentence(catName) {
  return "ゆいいつ" + catName + "だけがかわいい猫だね";
}
const message = makeSentence(thecatName);
console.log(message);
// HTMLの id="out1" の場所に message を書き込む
document.getElementById("out1").innerText = message;

console.log("コンソールに表示される文字だよ");
document.getElementById("out2").innerText = "コンソールに表示される文字だよ";

console.log("大晦日になにしとんねんおまえ！");
document.getElementById("out3").innerText = "大晦日になにしとんねんおまえ！";

// --- 塾セクション ---
const theahoCat = "パンくん";
function jyuku(ahoCat) {
  return "我が塾はアホ猫、" + ahoCat + "を賢い猫にします";
}
const message2 = jyuku(theahoCat);
const message3 = jyuku(thecatName);
console.log(message2);
// HTMLの id="out4" に書き込み
document.getElementById("out4").innerText = message2;

console.log(message3);
// HTMLの id="out5" に書き込み
document.getElementById("out5").innerText = message3;

// --- 整備セクション ---
const theGaisha = "メルセデス・ベンツ";
function seibi(car) {
  return "整備して" + car + "を修理します";
}
const message4 = seibi(theGaisha);
const message5 = seibi(theahoCat);
console.log(message4);
// HTMLの id="out6" に書き込み
document.getElementById("out6").innerText = message4;

console.log(message5);
// HTMLの id="out7" に書き込み（アホ猫パンくんが修理される衝撃の結末！）
document.getElementById("out5").innerText = message5;

const wait = (ms) => new Promise((res) => setTimeout(res, ms));
async function morningRoutine() {
  console.log("おやすみなさい...");
  // 正解：await 魔法の関数(秒数);
  await wait(3000);
  console.log("起きました！");
}
// ここを追加！
morningRoutine();

// 実験　https://www.youtube.com/watch?v=f0IPnUWj9ik
console.log("むらきゃみ...");
function test(wao) {
  console.log(wao);
}
test("やっほおおお");
console.log(test("ままま"));
console.dir(test);

const colors = ["あ", "お", "き"];

// let red = colors[0];
// let blue = colors[1];
// let yellow = colors[2];
const [red, blue, yellow] = colors;

console.log(red);
console.log(blue);
console.log(yellow);

// 1. 元のオブジェクト（巨大なデータを想定）
const userResponse = {
  user_id: 101,
  user_display_name: "きよ",
  user_type: "premium",
};

// 2. 写経ポイント：別名を付けて取り出す
// 「元の名前 : 新しい変数名」の形
const {
  user_display_name: name,
  user_type: type,
  point = 0, // オブジェクトに無いのでデフォルト値が効く
} = userResponse;

// 3. 確認（変数名だけで呼べるようになっている）
console.log(name); // "きよ"
console.log(type); // "premium"
console.log(point); // 0

const mikan = ["ぽんかん", "ありだ", "ひだか"];
const [pon, ari, hida] = mikan;
console.log(pon);
console.log(ari);
console.log(hida);

const kiyo = {
  kname: "kiyohiko",
  kage: 53,
  kheight: 176,
};
const { kname: ki, kage: ka, kheight: kh } = kiyo;
console.log(ki);
console.log(ka);
console.log(kh);
console.log(kiyo.kname);
console.log(kiyo.kheight);
console.log(kiyo.kage);

// 1. 元のオブジェクト（巨大なデータを想定）
const userRes = {
  user_id: 101,
  user_display_name: "きよ",
  user_type: "premium",
};

const {
  user_id: ui,
  user_display_name: udn,
  user_type: ut,
  points = 0, // オブジェクトに無いのでデフォルト値が効く
} = userRes;
console.log(ui);
console.log(ut);
console.log(udn);
console.log(userRes.user_type);
console.log(userRes.user_display_name);
console.log(userRes.user_id);
console.log(points);
console.log(userRes.user_display_name);
console.log(userRes.points);

// 1. 入れ子構造のデータ
// const appConfig = {
//   appName: "MyGame",
//   settings: {
//     volume: 80,
//     isMuted: false
//   }
// };

// // 2. 写経ポイント：階層をなぞって変数を作る
// // settingsの中のvolumeだけを変数として抽出
// const {
//   settings: { volume }
// } = appConfig;

// // 3. 確認
// console.log(volume); // 80
// console.log(settings); // エラー！変数として作られたのは末端の volume だけ

const gameConfig = {
  name: "きよげー",
  since: 2026,
  setting: {
    volume: 33,
    canh: 1200,
    canw: 2000,
  },
};

console.log(gameConfig.setting.canh);

// const {
//   name: namae,
//   setting: { volume: thevol },
// } = gameConfig;
// console.log(namae);
// console.log(thevol);

const {
  name: onamae,
  since: itsukara,
  setting: { canh: gakakuh, canw: gakakuw },
} = gameConfig;
console.log(onamae);
console.log(itsukara);
console.log(gakakuh);
console.log(gakakuw);

document.write(`<table>`);
for (let index = 1; index <= 9; index++) {
  console.log(`<>${index}行`);
  document.write(`<tr>`);

  for (let index2 = 1; index2 <= 9; index2++) {
    console.log(`<td> ${index}かけるは${index2}は${index * index2}です</td>`);
    document.write(`<td> ${index}かけるは${index2}は${index * index2}です</td>`);
  }
  console.log(`</tr>`);
  document.write(`</tr>`);
}
document.write(`</table>`);
// let a = 0;
// while (a < 20) {
//   console.log(a);
//   a++;
// }

const dog = {
  theDog: "ケリー",
  theage: 14,
  thehealth: {
    head: "nice",
    body: "good",
    foot: "powerful",
  },
};

console.log(dog.thehealth.foot);
console.log(dog.theDog);

const {
  theDog: myLove,
  thehealth: { body: myBody },
} = dog;
console.log(myLove);
console.log(myBody);

for (let i = 1; i <= 9; i++) {
  let rowText = "<tr>"; // 行の開始
  for (let j = 1; j <= 9; j++) {
    rowText += `<td>${i * j}</td>`; // 1マスずつ追加
  }
  rowText += "</tr>"; // 行の終わり
  console.log(rowText); // 1行分をまとめて表示
}

const starnum = 5;

// for (let i = 1; i <= starnum; i++) {
//   // 1. ここで「その行の星」を溜める変数を作る
//   let line = "";

//   // 2. 内側のループ：iの数だけ星を足していく
//   for (let j = 1; j <= i; j++) {
//     line += "*";
//   }

//   // 3. 1行分ができたら表示（改行）
//   console.log(line);
//   // document.write(line + "<br>"); // 画面に出す場合はこちら
// }

for (let i = 1; i <= starnum; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "ま";
  }
  document.write(row + "<br/>");
}
