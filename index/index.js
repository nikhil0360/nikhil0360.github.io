
var defHTML = document.getElementsByClassName('view') ;
var def = defHTML[0].innerHTML ;

var tab1c =
"<h1> Hello There, I am Nikhil </h1><p>I am a sphomore @IIIT Bangalore, pursuing computer science Engineering and exploring different domains of it. Currently I am interested in various application of computer science and web-dev</p><p> People Best describe me as : <br><br> A learning enthusiast who is forever excited to learn about anything tech. You can see him jamming to the craziest music at the weirdest of times. Not a particular fan of sports but definitely gives it a try to keep his friends company. When he doesn't have a smile on his face, he is busy coming up with some new abstract art.</p>" ;

var tab2c =
"<h1>Coding, Projects, Courses</h1> <p>I love working in Python, and recently i have started learning Java for entering OOPS to enter in the world of classes and objects. I like problem solving and creative solutions, and my projects are based on those ideas (You can check them on PROJECT tab).</p><p>From college I have learned various computer science topics, such as Computer architecture, Digital Design, Data Structures and Algorithms, Linear Algebra, Calculus and more.</p><p>Just to list out, I have worked with the following languages : C, Python, Java, HTML, CSS, Javascript, LaTex</p>" ;

var tab3c =
"<h1>IIIT, Bangalore</h1> <p>I am in Second Year at IIITB. Its a great college with excellent course Structure and various Computer Science domain to explore. People really work hard here and we are always at our toes with lots of assignment and work, but at the same time we have fun through various events through the year. Our college also focus on research in great deal.</p> " ;

var tab4c =
"<h1>Python modules, and techs</h1> <p> I like working with python, and therefore i keep exploring about various modules and small projects. I take huge interest in anything technical and requires problem solving, and i find this very useful skill handy. I try to come up with new and crazy ideas with my friends (most recent is the FunTex).</p><p>Apart from all this, I have various other interest and you can see it on PLAY tab.</p>" ;


var view = document.getElementsByClassName('view') ;
var tab1 = document.getElementById('tab1') ;
var tabb1 = document.getElementById('tabb1') ;

var tab2 = document.getElementById('tab2') ;

var tab3 = document.getElementById('tab3') ;
var tab4 = document.getElementById('tab4') ;
var tabb1 = document.getElementById('tabb1') ;
var isSelected = false ;

function setView(target,content){
  target[0].innerHTML = content ;
}

function makeSelected(tab){
  var tabb = tab.getElementsByClassName('tabb')[0] ;
  tab.classList.add('selectedTab');
  tabb.style.display = 'block' ;
  // tab.setAttribute("style", "background: var(--light); border-left: 4px solid var(--head-blue); color:white;");
}

function makeUnSelected(tab){
  tab.getElementsByClassName('tabb')[0].classList.remove("selectedTab");  ;
  tab.getElementsByClassName('tabb')[0].style.cssText = '' ;
}


tab1.onmouseover = function(){
  if(isSelected === false )
    view[0].innerHTML = tab1c ;
} ;
tab1.onmouseout = function(){
  if(isSelected === false )
    view[0].innerHTML = def;
} ;


// tab1.addEventListener('click' ,function(){
//   tab1.classList.add('selectedTab');
//   tabb1.style.display = 'block' ;
//   isSelected = true ;
// }, true ) ;
//
// tabb1.addEventListener('click' , function() {
//   tab1.classList.remove('selectedTab') ;
//   tabb1.style.display = 'none' ;
//   isSelected = false ;
// } , true ) ;
//




tab2.onmouseover = function(){
  if(isSelected === false )
    view[0].innerHTML = tab2c ;
} ;
tab2.onmouseout = function(){
  if(isSelected === false )
  view[0].innerHTML = def;
} ;

tab3.onmouseover = function(){
    if(isSelected === false )
  view[0].innerHTML = tab3c ;
} ;
tab3.onmouseout = function(){
    if(isSelected === false )
  view[0].innerHTML = def;
} ;

tab4.onmouseover = function(){
    if(isSelected === false )
  view[0].innerHTML = tab4c ;
} ;
tab4.onmouseout = function(){
    if(isSelected === false )
  view[0].innerHTML = def;
} ;
