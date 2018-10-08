var aufgabe0;
(function (aufgabe0) {
    function main() {
        var input = prompt("whats your name?");
        var txt = document.getElementById("dembody");
        txt += "Hey there  " + input + ", glad you are with us.";
        ;
        console.log(input);
    }
    document.addEventListener('DOMContentLoaded', main);
})(aufgabe0 || (aufgabe0 = {}));
