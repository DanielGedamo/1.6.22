// function getAlert (){
//     alert("hi user")
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
// 1
// function getAlert (){
//     alert("wllcom")
// }
//  2

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
//   var body = document.body;
//   if (myDate.getHours() > 12) {
//     body.style.backgroundColor = "yellow";
//     body.innerText = "good day";
//   } else {
//     body.style.backgroundColor = "red";
//     body.innerText = "good evning ";
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
// // }
// // ............תרגול חוזר של השאלות..........
// function wellcomeAlert(){
//     alert("welcome")
// }
// var nowTime= new Date()
// function printTime(){
//     document.write(nowTime.getHours() + ":" +nowTime.getMinutes() + ":" + nowTime.getSeconds())
// }
// function colorToGreen(){
//  myColor.style.color="red"
// };
// function widthGetBiger(){
//    botton.style.width ="100px"
// }

// function texstChange(){
//     document.getElementById("pText1").innerText= "na na na"
// }
// function printName(){
//     var userFirst = document.getElementById("userName").value
//     document.write(userFirst)
// }

// window.onload = function getDate() {
//   var body = document.body;
//   var liveTime = new Date();
//   if (liveTime.getHours() > 12) {
//     body.style.backgroundColor = "yellow";
//     body.innerText="good morning";
//   }
//     else{
//       body.style.backgroundColor="red"
//       body.innerText="good eivneing"

//     }
// };

// var nowyear = new Date().getFullYear();
// var userYear =+ document.getElementById("myDate").value.substr(0,3);
// function userDayOfBirth(){
//     if (nowyear - userYear > 18){
//         document.body.innerText="welcom"
//         // document.getElementById("myDate").style.color="red"
//     };

//    document.body.innerText="bye bye"
// }
function sendLoto(){
    var random= Math.floor(Math.random()*57);
    var userNume = document.getElementById("userNome").value;
    if(random == userNume){
        body.innerText ="seccess"
    };
    body.innerText ="loser";
}
