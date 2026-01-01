// --- 猫セクション ---
const thecatName = "ごまちゃん";
function makeSentence(catName){
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
function jyuku(ahoCat){
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
function seibi(car){
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