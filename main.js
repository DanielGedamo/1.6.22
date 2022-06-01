// function getAlert (){
//     alert("hi mami")
// }

// function printName (){
//     console.log("daniel gadamo");
// }

// function getColor(){
//     spani.style.color = "yellow" ;
// }

// function getText (){
//     text1.style.font = "30px"
// }

// function getAlert (){
//     alert("wllcom")
// }

// function getTime (){
//     var myTime = new Date()

//     console.log(myTime.getHours());
// }

// function getColor (){
//     myColor.style.color = "purple";
// // }

// function getWidth (){
//     myButton.style.width= "50px"
// }

// function getText (){
//     var nwe= "im the king"
//     document.getElementById("my text").innerText= "im the king"
// }

// window.onload = function DateOF() {
//   var myDate = new Date();
//   var body= document.body;
//   if (myDate.getHours < 12) {
//     body.style.backgroundColor = "yellow" ;
//     body.innerText ="good day";
//   } else {
//     body.style.backgroundColor = "red";
//     body.innerText ="good evning "
//   }
// };
// window.onload =function getAge (){
//     var userAge =+prompt("enter youer age");
//     var over  = document.getElementById("wellcom")
//     if(userAge>18){
//       over.style.color ='red';
//       over.innerText = 'weelco'
//     }
//     else{
//        over.style.color ="blue";
//        over.innerText = 'weelco'

//     }

// }
//     function grinColor(){
//    var x= document.getElementById("wellcom")
//     x.style.color ="green"
// }
window.onload = function getAge() {
  var age = prompt("enter youer age");
  var userAge = document.getElementById("wellcome");
  if (age > 18) {
    userAge.style.color = "red";
    userAge.innerText ="wellcome"
  }

    else{
      userAge.style.color = "blue";
      userAge.innerText ="wellcome"
    };
   
};
 function getGreen (){
        var x =document.getElementById("wellcome");
        x.style.color ="green"
    }