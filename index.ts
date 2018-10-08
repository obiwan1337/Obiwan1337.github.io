  var node : any = document.getElementById("main");
  let number: number = 0;
  while (number < 1){
let htmlnode:string = "";
htmlnode+= "<h2> A small page</h2>";
htmlnode+='<a href=';
htmlnode+=' "https://obiwan1337.github.io/EIA2/Aufg0/aufg0.html" ';
htmlnode+='target=';
htmlnode+=' "_blank" ';
htmlnode+='>Aufgabe0</a>';

node.innerHTML += htmlnode;
  number++;
}
