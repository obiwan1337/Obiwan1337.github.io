var aufg0;
(function (aufg0) {
    function question() {
        var input = prompt("whats your name?");
        var txt;
        txt = "Hey there  ";
        txt += input;
        txt += ", glad you are with us.";
        document.getElementById("dembody").innerHTML += txt;
        console.log(input);
    }
    document.addEventListener('DOMContentLoaded', question);
})(aufg0 || (aufg0 = {}));
