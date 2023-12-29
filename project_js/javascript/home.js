var image = document.getElementById("slider")
var i = 0
setInterval(function(){
    i++
    if(i == 12){
        i == 1
    }
   if(i == 1){
    image.setAttribute("src","./images/1.png")
   }else if(i == 2){
    image.setAttribute("src","./images/2.png")
   }else if(i == 3){
    image.setAttribute("src","./images/5.png")
   }else if(i == 4){
    image.setAttribute("src","./images/6.png")
   }else if(i == 5){
    image.setAttribute("src","./images/3.png")
   }else if(i == 6){
    image.setAttribute("src","./images/4.png")
   }else if(i == 7){
    image.setAttribute("src","./images/9.png")
   }else if(i == 8){
    image.setAttribute("src","./images/10.png")
   }else if(i == 9){
    image.setAttribute("src","./images/7.png")
   }else if(i == 10){
    image.setAttribute("src","./images/8.png")
   }else if(i == 11){
    image.setAttribute("src","./images/11.png")
   }else if(i == 12){
    image.setAttribute("src","./images/12.png")
    i=0
   }
    
    
},1000)

image.addEventListener("mouseover",function(){
    image.style.width="400px"
    image.style.height="400px"
    image.style.boxShadow = "10px 10px 10px black"
    image.style.border="2px solid blue"
})
image.addEventListener("mouseout",function(){
    image.style.width="300px"
    image.style.height="300px"
    image.style.boxShadow = "0 0 0 0"
    image.style.border="0"
})

var left = document.getElementsByClassName("left_img")[0]
var count = 1
function change_left(){
    count++
    if(count == 12){
        count == 1
    }
    console.log(count)
   if(count == 1){
    image.setAttribute("src","./images/1.png")
   }else if(count == 2){
    image.setAttribute("src","./images/2.png")
   }else if(count == 3){
    image.setAttribute("src","./images/5.png")
   }else if(count == 4){
    image.setAttribute("src","./images/6.png")
   }else if(count == 5){
    image.setAttribute("src","./images/3.png")
   }else if(count == 6){
    image.setAttribute("src","./images/4.png")
   }else if(count == 7){
    image.setAttribute("src","./images/9.png")
   }else if(count == 8){
    image.setAttribute("src","./images/10.png")
   }else if(count == 9){
    image.setAttribute("src","./images/7.png")
   }else if(count == 10){
    image.setAttribute("src","./images/8.png")
   }else if(count == 11){
    image.setAttribute("src","./images/11.png")
   }else if(count == 12){
    image.setAttribute("src","./images/12.png")
    count = 0
   }
}

left.addEventListener("click",change_left)
var right = document.getElementsByClassName("right_img")[0]

function change_right(){
    count--
    if(count == 0){
        count = 12
    }
    console.log(count)
   if(count == 1){
    image.setAttribute("src","./images/1.png")
   }else if(count == 2){
    image.setAttribute("src","./images/2.png")
   }else if(count == 3){
    image.setAttribute("src","./images/5.png")
   }else if(count == 4){
    image.setAttribute("src","./images/6.png")
   }else if(count == 5){
    image.setAttribute("src","./images/3.png")
   }else if(count == 6){
    image.setAttribute("src","./images/4.png")
   }else if(count == 7){
    image.setAttribute("src","./images/9.png")
   }else if(count == 8){
    image.setAttribute("src","./images/10.png")
   }else if(count == 9){
    image.setAttribute("src","./images/7.png")
   }else if(count == 10){
    image.setAttribute("src","./images/8.png")
   }else if(count == 11){
    image.setAttribute("src","./images/11.png")
   }else if(count == 12){
    image.setAttribute("src","./images/12.png")
    count ==1
   }
}


right.addEventListener("click",change_right)

var add =document.querySelectorAll(".add")
var count_add = 0
var cart =""
add.forEach(function(btn){
    
    btn.addEventListener("click",function(){
        count_add++
        document.getElementsByClassName("span")[0].textContent=count_add
         var char= btn.value.split("*") 
            console.log(char)
            cart +=document.getElementById(char[0]).getAttribute("src").split("/").pop()+','
            cart +=document.getElementById(char[1]).textContent+','
            cart +=document.getElementById(char[2]).textContent+','
            console.log(cart)
            console.log(cart)
          var myDate = new Date();
         myDate.setDate(myDate.getDate() + 3);
         document.cookie = "username="+cart+";expires=" + myDate;

    })
    
    
})

var phone1=[{
    id:'./images/1.png',
    name:"iphone pro max",
    salary:"13000"
    
},{
    id:'./images/2.png',
    name:"iphone pro max",
    salary:"17000"
    
},{
    id:'./images/3.png',
    name:"iphone14",
    salary:"35000"
    
},{
    id:'./images/4.png',
    name:"iphone15",
    salary:"40000"
    
}

]

var laptop=[{
    id:"./images/5.png",
    name:"Dell",
    salary:"13000"

},{
    id:"./images/6.png",
    name:"lenovo",
    salary:"15000"

},{
    id:"./images/7.png",
    name:"hp",
    salary:"10000"

},{
    id:'./images/8.png',
    name:"Dell",
    salary:"14000"

}
]

var access =[
    {
        id:'./images/9.png',
        name:"green headphone",
        salary:"500"
    
    },{
        id:'./images/10.png',
        name:"headphone",
        salary:"500"
    
    },{
        id:'./images/11.png',
        name:"eyerbods",
        salary:"2000"
    
    },{
        id:'./images/12.png',
        name:"charge iphone",
        salary:"700"
    
    },
]

var lap = document.getElementById("lap");
var phone = document.getElementById("phone")
var acc =document.getElementById("access")

lap.addEventListener("click", function(event) {
  event.preventDefault();
  var imgElements = document.querySelectorAll(".img");
  var name = document.querySelectorAll(".name")
  var price= document.querySelectorAll(".p")
 
 

  imgElements.forEach(function(img, index) {
    if (index < laptop.length) { 
      img.setAttribute("src", laptop[index].id); 
    }
  });

  name.forEach(function(nam , index){
    if(index <laptop.length){
        nam.textContent=laptop[index].name
    }
  })

  price.forEach(function(p , index){
    if(index <laptop.length){
        p.textContent=laptop[index].salary
    }
  })

   var div_h = document.querySelectorAll(".div_h")
    div_h.forEach(function(div){
        div.style.display="none"
    })

});


phone.addEventListener("click", function(event) {
    event.preventDefault();
    var imgElements = document.querySelectorAll(".img");
    var name = document.querySelectorAll(".name")
    var price= document.querySelectorAll(".p")
   
   
  
    imgElements.forEach(function(img, index) {
      if (index < phone1.length) { 
        img.setAttribute("src", phone1[index].id); 
      }
    });
  
    name.forEach(function(nam , index){
      if(index <phone1.length){
          nam.textContent=phone1[index].name
      }
    })
  
    price.forEach(function(p , index){
      if(index <phone1.length){
          p.textContent=phone1[index].salary
      }
    })
  
     var div_h = document.querySelectorAll(".div_h")
      div_h.forEach(function(div){
          div.style.display="none"
      })
  
  });

  acc.addEventListener("click", function(event) {
    event.preventDefault();
    var imgElements = document.querySelectorAll(".img");
    var name = document.querySelectorAll(".name")
    var price= document.querySelectorAll(".p")
   
   
  
    imgElements.forEach(function(img, index) {
      if (index < access.length) { 
        img.setAttribute("src", access[index].id); 
      }
    });
  
    name.forEach(function(nam , index){
      if(index <access.length){
          nam.textContent=access[index].name
      }
    })
  
    price.forEach(function(p , index){
      if(index <access.length){
          p.textContent=access[index].salary
      }
    })
  
     var div_h = document.querySelectorAll(".div_h")
      div_h.forEach(function(div){
          div.style.display="none"
      })
  
  });

  var all =document.getElementById("all")

  all.addEventListener("click",function(event){
    event.preventDefault()
    location.reload()
  })




var up =document.getElementById("foot")

up.addEventListener("click",function (event) {
    event.defaultPrevented()
    up.setAttribute("href","#all")
})


