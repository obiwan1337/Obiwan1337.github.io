namespace aufgabe0 {


    function main() {
      let  input : string = prompt("whats your name?");
        let txt : any = document.getElementById("dembody");
        txt += "Hey there  " + input + ", glad you are with us.";;

        console.log(input);
          
        }

    document.addEventListener('DOMContentLoaded',main);
}
