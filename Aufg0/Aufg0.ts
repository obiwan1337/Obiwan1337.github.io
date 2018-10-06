namespace aufgabe0 {
  let txt : string ="";

    function main() {
        let txt = prompt("whats your name?");
        let node : any = document.getElementById("dembody");
        node.innerHTML += "Hey there";
        node.innerHTML += txt;
        node.innerHTML += ", glad you are with us.";
        console.log(txt);
        }
    document.addEventListener('DOMContentLoaded',main);
}
