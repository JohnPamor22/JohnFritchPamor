let subscribeBtn = document.getElementById("subscribe");
let subscribe = false;

subscribeBtn.addEventListener('click',()=>{
if(subscribe){
    subscribeBtn.innerText ="SUBSCRIBED"
    subscribeBtn.style = "background-color:gray;"
    subscribe = false
}else{
    subscribeBtn.innerText = "SUBSCRIBE"
    subscribeBtn.style = "background-color: red;"
    subscribe = true
}
})