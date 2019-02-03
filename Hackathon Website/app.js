var correctAnswer = 0;
var totalAnswered = 0;
const percentageCorrect = document.getElementById("progess-percent");
const question_p = document.querySelector(".prompt > p");
const picture_1 = document.getElementById("one");
const picture_2 = document.getElementById("two");
const picture_3 = document.getElementById("three");
const picture_4 = document.getElementById("four");
const reasoning_p = document.getElementById("reasoning");
const actionMessage_p = document.getElementById("action-message");
var correctPicture = 1;
var round = 1;


function game(answer){
  if (answer == correctPicture) {
    console.log("Correct");
    correctAnswer++;
    totalAnswered++;
    updatePictures();
    updatePercentCorrect();
    updateCorrectReasoning();
    updateQuestion();
  }else{
    console.log("RecievedFalse");
    totalAnswered++;
    // updatePictures();
    updatePercentCorrect();
    updateIncorrectReasoning();
    updateQuestion();
 }
}

function updateQuestion(){
  if(round <= 3){
    question_p.innerHTML = "Which shrimp has White Spot Syndrome?";
  }else if(round == 4){
    question_p.innerHTML = "Where does the virus usually occur?";
  }else if(round == 5){
    question_p.innerHTML = "Which life stage is the shrimp potentially susceptible to White Spot Syndrome Virus?";
  }else if(round == 6){
    question_p.innerHTML = "What can also transmit the disease?";
  }else if(round == 7){
    question_p.innerHTML = "When does the disease usually appears?";
  }else if(round == 8){
    question_p.innerHTML = "Which treatment cannot control the syndrome?";
  }
}

function updatePercentCorrect(){
  newPercent = Math.floor((correctAnswer/totalAnswered) * 100);
  percentageCorrect.innerHTML = newPercent + "%";
}

function updateCorrectReasoning(){
  if(round <= 3){
    actionMessage_p.innerHTML = 'Correct!';
    reasoning_p.innerHTML = "Traits of White Spot Syndrome: Erratic or near-bottom-of-the-pond swimming. Reduced growth. Whitening of the hepatopancreas. Reduction in size of hepatopancreas. Soft texture of the exoskeleton. Dark spots or streaks on the hepatopancreas. Hardening of hepatopancreas";
  }else{
    actionMessage_p.innerHTML = 'Correct!';
    reasoning_p.innerHTML = "Please choose an image.";
  }
}

function updateIncorrectReasoning(){
  if(round <= 3){
    actionMessage_p.innerHTML = "Incorrect. Click on the correct image to proceed. Here are traits to tell which shrimps have White Spot Syndrome.";
    reasoning_p.innerHTML = "Erratic or near-bottom-of-the-pond swimming. Reduced growth. Whitening of the hepatopancreas. Reduction in size of hepatopancreas. Soft texture of the exoskeleton. Dark spots or streaks on the hepatopancreas. Hardening of hepatopancreas";
  }else if(round == 4){
    actionMessage_p.innerHTML = "Incorrect. Click on the correct image to proceed.";
    reasoning_p.innerHTML = "The correct answer to 'Where does the virus usually occur?' is 'The virus is known to occur in fresh, brackish and marine water.'"
  }else if(round == 5){
    actionMessage_p.innerHTML = "Incorrect. Click on the correct image to proceed.";
    reasoning_p.innerHTML = "The correct answer to 'Which life stage is the shrimp potentially susceptible to White Spot Syndrome Virus?' is 'All life stages.'"
  }else if(round == 6){
    actionMessage_p.innerHTML = "Incorrect. Click on the correct image to proceed.";
    reasoning_p.innerHTML = "The correct answer to 'What can also transmit the disease?' is 'Bird.'"
  }else if(round == 7){
    actionMessage_p.innerHTML = "Incorrect. Click on the correct image to proceed.";
    reasoning_p.innerHTML = "The correct answer to 'When does the disease usually appears?' is 'The disease appears during the first seven to 30 days after planting.'"
  }else if(round == 8){
    actionMessage_p.innerHTML = "Incorrect. Click on the correct image to proceed.";
    reasoning_p.innerHTML = "The correct answer to 'Which treatment cannot control the syndrome?' is 'Pay special attention to grown shrimp.'"
  }
}

function updatePictures(){
  var a = round*4;
  var randomNumber = Math.floor(Math.random() * 4);

  var one = randomNumber + 1 + a;
  var two = (randomNumber+1)%4 + 1 + a;
  var three = (randomNumber+2)%4 + 1 + a;
  var four = (randomNumber+3)%4 + 1 + a;
  if(one%4 == 1){
    correctPicture = 1;
  }else if (two%4 == 1) {
    correctPicture = 2;
  }else if (three%4 == 1) {
    correctPicture = 3;
  }else {
    correctPicture = 4;
  }
  document.getElementById("imageOne").src = "images/"+ one + ".jpg";
  document.getElementById("imageTwo").src = "images/"+ two + ".jpg";
  document.getElementById("imageThree").src = "images/"+ three + ".jpg";
  document.getElementById("imageFour").src = "images/"+ four + ".jpg";
  round++;
}

function main(){
  picture_1.addEventListener('click', function(){
    //console.log("1Recieved");
    game("1");
    //console.log(document.getElementById("imageOne").src);
  })
  picture_2.addEventListener('click', function(){
    //console.log("1Recieved");

    game("2");
  })
  picture_3.addEventListener('click', function(){
    //console.log("1Recieved");
    game("3");
  })
  picture_4.addEventListener('click', function(){
    //console.log("1Recieved");
    game("4");
  })
}

main();
