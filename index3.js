const thecat = "パン";
console.log(thecat);
function catjuku(cat){
    return "この塾は" + cat +"を賢い猫にします";
}
const message = catjuku(thecat);
console.log(message);
document.getElementById("m01").innerText = message;