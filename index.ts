  var node : any = document.getElementById("main");
  let number: number = 0;
  while (number < 1){
let htmlnode:string = "";
htmlnode+="<html lang=en>";
htmlnode+="<head>";
htmlnode+="<meta charset= 'UTF-8' >";
htmlnode+="<title>customwebsite</title>";
htmlnode+="<link rel="
 htmlnode+="href="
 htmlnode+="index.css"
 htmlnode+=">"
htmlnode+='"stylesheet"';
htmlnode+=" type=";
htmlnode+='"text/css"';
htmlnode+="href="
htmlnode+="index.css"
htmlnode+=">"

node.innerHTML += htmlnode;
  number++;
}
