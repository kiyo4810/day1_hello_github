//変数nameを宣言し私の名前をそこに入れる
const myName = "きよひこまる";
//関数は「特定の処理をまとめた命令セット」です。
//userName は**引数（ひきすう）**と呼ばれ、関数を動かすときに外から渡されるデータを受け取る窓口になります。
//return（戻り値）は、この関数が実行された結果として「外に返す値」を指します。ここでは、挨拶文を作って返しています。
function makeSentence(name){
    return "こんにちは、" + name + "で美味しい炊きたてご飯をつくるよ";
}
const message = makeSentence(myName);
console.log(message);
console.log(message);
console.log("コンソールに表示される文字だよ");
console.log("大晦日になにしとんねんおまえ！");
