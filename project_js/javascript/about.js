var body =document.getElementById("body")

body.addEventListener("mouseover",function(){
    body.style.backgroundColor="rgb(42, 165, 165)"
    body.style.boxShadow = "10px 10px 10px black"
    body.style.color ="white"
    document.getElementById("rate").style.color="gold"
    document.getElementById("show").style.color="gold"
    
})
body.addEventListener("mouseout",function(){
  body.style.background ="rgb(245, 232, 159)"
  body.style.boxShadow="0 0 0 0"
  body.style.color ="black"
})


var star1=document.getElementById("star1")
var star2=document.getElementById("star2")
var star3=document.getElementById("star3")
var star4=document.getElementById("star4")
var star5=document.getElementById("star5")

star1.addEventListener("click",function (){
    star1.setAttribute("src","./images/gold.png")
    star2.setAttribute("src","./images/icons8-star-25.png")
    star3.setAttribute("src","./images/icons8-star-25.png")
    star4.setAttribute("src","./images/icons8-star-25.png")
    star5.setAttribute("src","./images/icons8-star-25.png")
    
})

star2.addEventListener("click",function (){
    star1.setAttribute("src","./images/gold.png")
    star2.setAttribute("src","./images/gold.png")
    star3.setAttribute("src","./images/icons8-star-25.png")
    star4.setAttribute("src","./images/icons8-star-25.png")
    star5.setAttribute("src","./images/icons8-star-25.png")
})

star3.addEventListener("click",function (){
    star1.setAttribute("src","./images/gold.png")
    star2.setAttribute("src","./images/gold.png")
    star3.setAttribute("src","./images/gold.png")
    star4.setAttribute("src","./images/icons8-star-25.png")
    star5.setAttribute("src","./images/icons8-star-25.png")
})
star4.addEventListener("click",function (){
    star1.setAttribute("src","./images/gold.png")
    star2.setAttribute("src","./images/gold.png")
    star3.setAttribute("src","./images/gold.png")
    star4.setAttribute("src","./images/gold.png")
    star5.setAttribute("src","./images/icons8-star-25.png")
    
})

star5.addEventListener("click",function (){
    star1.setAttribute("src",'./images/gold.png')
    star2.setAttribute("src","./images/gold.png")
    star3.setAttribute("src","./images/gold.png")
    star4.setAttribute("src","./images/gold.png")
    star5.setAttribute("src","./images/gold.png")
    
})

var left = document.getElementById("left")

left.addEventListener("mouseover",function(){
    left.style.backgroundColor="rgb(42, 165, 165)"
    left.style.boxShadow = "10px 10px 10px black"
    
    
})
left.addEventListener("mouseout",function(){
  left.style.background ="rgb(241, 226, 179)"
  left.style.boxShadow="0 0 0 0"
  left.style.color ="black"
})
var right = document.getElementById("right")
right.addEventListener("mouseover",function(){
    right.style.backgroundColor="rgb(42, 165, 165)"
    right.style.boxShadow = "10px 10px 10px black"
})

right.addEventListener("mouseout",function(){
    right.style.background ="rgb(241, 226, 179)"
    right.style.boxShadow="0 0 0 0"
    right.style.color ="black"
})

var rate= document.getElementsByTagName("b")[0]
rate.addEventListener("click",function () {
    left.style.display="block"
})

document.getElementById("show").addEventListener("click",function(){
    document.getElementById("right").style.display="block"
})

document.getElementById("btn").addEventListener("click",function(){
    document.getElementsByTagName("h2")[0].textContent="Thenk You"
    document.getElementsByTagName("h2")[0].style.color="green"
    
})
