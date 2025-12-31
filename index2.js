//変数nameを宣言し私の名前をそこに入れる
const thecatName = "ごまちゃん";
//関数は「特定の処理をまとめた命令セット」です。
//userName は**引数（ひきすう）**と呼ばれ、関数を動かすときに外から渡されるデータを受け取る窓口になります。
//return（戻り値）は、この関数が実行された結果として「外に返す値」を指します。ここでは、挨拶文を作って返しています。
function makeSentence(catName){
    return "ゆいいつ" + catName + "だけがかわいい猫だね";
}
const message = makeSentence(thecatName);
console.log(message);
console.log("コンソールに表示される文字だよ");
console.log("大晦日になにしとんねんおまえ！");

const theahoCat = "パンくん";
//関数は「特定の処理をまとめた命令セット」です。
//userName は**引数（ひきすう）**と呼ばれ、関数を動かすときに外から渡されるデータを受け取る窓口になります。
//return（戻り値）は、この関数が実行された結果として「外に返す値」を指します。ここでは、挨拶文を作って返しています。
function jyuku(catName){
    return "我が塾はアホ猫、" + catName + "を賢い猫にします」";
}
const message2 = jyuku(theahoCat);
const message3 = jyuku(thecatName);
console.log(message2);
console.log(message3);

const theGaisha = "メルセデス・ベンツ";
function seibi(car){
    return "整備して" + car + "を修理します";
}
const message4 = seibi(theGaisha);
const message5 = seibi(theahoCat);
console.log(message4);
console.log(message5);