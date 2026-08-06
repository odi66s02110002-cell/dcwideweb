window.addEventListener("scroll",()=>{
    const nav=document.querySelector(".navbar");

    if(window.scrollY>50){
        nav.style.boxShadow="0 2px 10px rgba(0,0,0,.15)";
    }else{
        nav.style.boxShadow="none";
    }
});
function toggleChat(){

    const chat=document.getElementById("chatBox");

    if(chat.style.display==="block"){

        chat.style.display="none";

    }else{

        chat.style.display="block";

    }

}
