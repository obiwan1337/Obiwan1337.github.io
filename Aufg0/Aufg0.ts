namespace aufg0 {
    function question() {
      let  input : string = prompt("whats your name?");
        let txt : string;
        txt = "Hey there  "
        txt += input ;
        txt += ", glad you are with us.";


        document.getElementById("dembody").innerHTML+= txt;
        console.log(input);
        }

    document.addEventListener('DOMContentLoaded',question);
}
