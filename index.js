const input = document.querySelector('#input-box');
const ulcontainer = document.querySelector('.ulcontainer')
const btn = document.querySelector('.btn');
btn.addEventListener('click' , function(){
    if(input.value == '' ){
        alert("please  write some thing")
    }
    else {
        let li = document.createElement('li');
        li.textContent = input.value;
        ulcontainer.append(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        
    }
    input.value = "";




ulcontainer.addEventListener('click' , function(e){
  if(e.target.tagName =='LI'){
    e.target.classList.toggle("checked")
  }
  else if(e.target.tagName =="SPAN"){
    e.target.parentElement.remove();
  }

} , false)
}

)
