var aufgabe0;
(function (aufgabe0) {
    var txt = "";
    function main() {
        var txt = prompt("whats your name?");
        var node = document.getElementById("dembody");
        node.innerHTML += "Hey there";
        node.innerHTML += txt;
        node.innerHTML += ", glad you are with us.";
        console.log(txt);
    }
    document.addEventListener('DOMContentLoaded', main);
})(aufgabe0 || (aufgabe0 = {}));
