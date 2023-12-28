var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;//0 to 5
randomNumber1=Math.floor(randomNumber1)+1;//1-6
console.log(randomNumber1);
var randomdiceimage="dice"+randomNumber1+".png";//dice1 to dice2 images
var randomimagesrc="images\\"+randomdiceimage;


var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;//0 to 5
randomNumber2=Math.floor(randomNumber2)+1;//1-6
console.log(randomNumber2);
var randomdiceimage2="dice"+randomNumber2+".png";//dice1 to dice2 images
var randomimagesrc2="images\\"+randomdiceimage2;


var image1=document.querySelectorAll('img')[0].setAttribute("src",randomimagesrc);
var image1=document.querySelectorAll('img')[1].setAttribute("src",randomimagesrc2);
if(randomNumber1>randomNumber2){
   document.querySelector("h1").innerHtml="Player 1 wins";
   
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML=" Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML=" ITS A DRAW";
}



