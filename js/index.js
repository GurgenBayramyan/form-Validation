let inputs = document.querySelectorAll("input");
const btn = document.querySelector(".submit");
let spans = document.querySelectorAll("span");

// inputs
let forName = inputs[0];
let pasword = inputs[1];
let email= inputs[2];
let tell = inputs[3];

//title reload
document.querySelector("h1").addEventListener("click",()=>{
    location.reload()
})

// form default
document.querySelector("form").addEventListener("click",(e)=>{
    e.preventDefault();
    
})

// for btn
btn.addEventListener("click",()=>{
    inputs.forEach((input)=>{
        if(input.value.trim()===""){
            input.classList.add("eror")
        }else{
            input.classList.remove("eror")
        }
    })
  
})



function namevalidation(name){
       //name validation
   if( !name.value[0].match(/[A-ZА-ЯЁ]/g) || name.value.length > 16  ||!name.value[name.value.length-1].match(/\d/)){
    name.classList.add("eror");
    if(name.classList.contains("eror")){
        spans[0].innerText="The name must start with a capital letter and contain a number at the end"
    }
}else{
    name.classList.remove("eror");
    name.classList.add("okay")
    spans[0].innerText=""
}
}
function passwordvalidation(pasword){
     //pasword validation
    if(!pasword.value.match(/[A-ZА-ЯЁ]/g) || pasword.value.length > 12  || !pasword.value.match(/\d/)){
        pasword.classList.add("eror");
        if(pasword.classList.contains("eror")){
            spans[1].innerText="password must contain at least one number and one uppercase letter and the maximum length should be 12 letters"
        }
   }else{
        pasword.classList.remove("eror");
        pasword.classList.add("okay")
        spans[1].innerText=""  
   }
}
function emailvalidation(email){
    //email validation

    let validMail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;

    if(!validMail.test(email.value)){
        email.classList.add("eror");
        if(email.classList.contains("eror")){
            spans[2].innerText="please use a valid email address"
        }

   }else{
        email.classList.remove("eror");
        email.classList.add("okay")
        spans[2].innerText=""
   }
}
function tellvalidation(tell){
    //tel validation
    if(tell.value.match(/[^+\d]/g)||tell.value.trim()== ""|| tell.value.length < 9){
        tell.classList.add("eror")
        if(tell.classList.contains("eror")){
            spans[3].innerText="please enter numbers only"
        }
      }else{
        tell.classList.remove("eror");
        tell.classList.add("okay")
        spans[3].innerText="";
      }
}


forName.addEventListener("change",()=>{
    namevalidation(forName)
})
pasword.addEventListener("change",()=>{
    passwordvalidation(pasword)
})
email.addEventListener("change",()=>{
    emailvalidation(email)
})
tell.addEventListener("change",()=>{
    tellvalidation(tell)
})
