
var user =document.getElementById("user")
function check_user(){
    var pattern = /^[a-zA-Z]*$/
    var str = user.value

    if(pattern.test(str)){
        var e_span =document.getElementById("suser")
        e_span.textContent=" "
    }else{
        var e_span =document.getElementById("suser")
        e_span.textContent="Invalid username. Username should only contain letters."
        e_span.style.color="red"
    }
    


}
user.addEventListener("input",check_user)

var email =document.getElementById("email")
function check_email(){
    var str = email.value
 
    var test = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    var res = test.test(str)
    if(res){
        var e_span =document.getElementById("semail")
        e_span.textContent=" "
        
    }else{
        var e_span =document.getElementById("semail")
        e_span.textContent=" enter invaild email" 
        e_span.style.color="red"
    }


}
email.addEventListener("input",check_email)

var text =document.getElementById("text")
function check_text(){
   var pattern = /^[^#%&$]*$/

   if(pattern.test(text.value)){
    var e_span =document.getElementById("stext")
        e_span.textContent=" "
   }else{
    var e_span =document.getElementById("stext")
    e_span.textContent=" don't enter spacial character !" 
    e_span.style.color="red"
   }
}

text.addEventListener("input",check_text)

var button = document.getElementById("btn")

function check(){
    var u =user.value
    var e = email.value
    var t = text.value 
    if(u === ''||e === ''||t == ''){
        const happyEmoji = '\u{1F600}';
        var massage="full form  please" + '\u{1F614}'
        alert(massage)
       
    }else{
        const happyEmoji = '\u{1F600}';
        var massage="Thank You " + happyEmoji+'\u{2764}'
        alert(massage)
        location.reload()
    }
}

button.addEventListener("click",check)






