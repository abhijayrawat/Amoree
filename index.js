document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});
document.querySelector("#show").addEventListener("click",function(){
    document.querySelector(".popup1").classList.add("active");
});
document.querySelector(".popup1 .close-btn").addEventListener("click",function(){
    document.querySelector(".popup1").classList.remove("active");
});