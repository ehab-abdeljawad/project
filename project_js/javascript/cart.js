
var cookieValue = document.cookie.split("=")[1]
console.log(cookieValue)

var products = cookieValue ? cookieValue.split(",") : [];
console.log()

var lastProduct = products.pop();


function addProductsToCart() {
    var cartElement = document.getElementById("c");

   
    cartElement.innerHTML = "";

   
    for (var i = 0; i < products.length; i += 3) {

        var div = document.createElement("div");
        div.setAttribute("class", "product");

        var img = document.createElement("img");
        img.setAttribute("class", "car_img");
        img.setAttribute("src", "./images/" + products[i]);

        var title = document.createElement("b");
        title.textContent = products[i + 1];

        var price = document.createElement("p");
        price.textContent = products[i + 2];

        var btn = document.createElement("button");
        btn.textContent = "Delete";
        btn.setAttribute("data-index", i); 
        btn.setAttribute("class","btn")

        btn.onclick = function (event) {
            var index = event.target.getAttribute("data-index"); 
            products.splice(index, 3); 
            addProductsToCart(); 
        };
    

        div.append(img, title, price, btn);
        cartElement.appendChild(div);
    
    }

}

addProductsToCart();

var purching  = document.getElementById("purch")
purching.addEventListener("click",function(){
    alert("Your order is ready for delivery  🚴‍♂️")
    var h =document.getElementsByClassName("btn")
    for(var i = 0 ; i < h.length ;i++){
        h[i].style.display="none"
    }
})


