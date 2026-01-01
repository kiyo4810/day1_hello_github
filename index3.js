//猫塾
const thecat = "パンくん";
console.log(thecat);
function catjuku(cat){
    return "この塾は" + cat +"を賢い猫にします";
}
const message1 = catjuku(thecat);
console.log(catjuku(thecat));
console.log(message1);
console.log(typeof message1);
let ufoCat;
console.log(typeof ufoCat);
document.getElementById("m01").innerText = message1;

//猫保育園
const theshyCat = "ごまくん";
function hoikuen(cat){
    return "この保育園は" + cat + "を甘やかします";
}
const message2 = hoikuen(theshyCat);
console.log(message2);
document.getElementById("m02").innerText = message2;

//猫天国
const theheavenCat = "レオくん";
function heaven(cat){
    return "ここが" + cat + "がいる天国だよ";
}
const message3 = heaven(theheavenCat);
console.log(message3);
document.getElementById("m03").innerText =message3;
