const nextButton = document.querySelector(".w3-button");
var itemType = document.querySelector(".itemType");
var round = 0;


function nextEvent(){
  if(round == 0){
    console.log(itemType.value + "value");
    if(itemType.value == "op1"){
      itemType.innerHTML = '';
      document.getElementById("survQuestion").innerHTML = "Your shrimps are not sick";
    }else{
      itemType.innerHTML = '';
      document.getElementById("survQuestion").innerHTML = "What depth are your shrimps at?";
      var op1 = document.createElement("option");
      op1.value="op1";
      op1.appendChild(document.createTextNode("Deep"));
      var op2 = document.createElement("option");
      op2.value="op2";
      op2.appendChild(document.createTextNode("Surface"));
      var op3 = document.createElement("option");
      op3.value="op3";
      op3.appendChild(document.createTextNode("Normal"));
      itemType.appendChild(op1);
      itemType.appendChild(op2);
      itemType.appendChild(op3);
      round++;
    }
  }else if (round == 1){
    if(itemType.value == "op2" || itemType.value == "op3"){
      itemType.innerHTML = '';
      document.getElementById("survQuestion").innerHTML = "Your shrimps are sick";
      console.log("Reached");
    }else{
      itemType.innerHTML = '';
      document.getElementById("survQuestion").innerHTML = "What color are your shrimps?";
      console.log("Reached 1");
      var op1 = document.createElement("option");
      op1.value="op1";
      op1.appendChild(document.createTextNode("Grey"));
      var op2 = document.createElement("option");
      op2.value="op2";
      op2.appendChild(document.createTextNode("Pale"));
      itemType.appendChild(op1);
      itemType.appendChild(op2);
      round++;
    }
  }else if(round == 2){
    if(itemType.value == op1){
      itemType.innerHTML = '';
      document.getElementById("survQuestion").innerHTML = "Your shrimps are not sick";
    }else{
      itemType.innerHTML = '';
      document.getElementById("survQuestion").innerHTML = "Your shrimps are sick";
    }
  }
}

function main(){
  nextButton.addEventListener('click', function(){
    nextEvent();
  })
}

main();
