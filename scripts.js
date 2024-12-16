const aboutLinks = document.querySelectorAll(".links");
const skillInfo =document.querySelector("#skill");
const experienceInfo =document.querySelector("#experience");
const educationInfo =document.querySelector("#education");
const burgerMenu =document.querySelector(".bx-menu");
const burDisapear = document.querySelector(".bx-x");

experienceInfo.style.display = "none";
educationInfo.style.display = "none";

aboutLinks.forEach((aboutLinks) => {
    aboutLinks.addEventListener("click", () =>{
        let value = aboutLinks.textContent;

        if(value === "Exprience"){
            skillInfo.style.display = "none";
            educationInfo.style.display = "none";
            experienceInfo.style.display = "block";
        }
        else if(value === "Education"){
            skillInfo.style.display = "none";
            experienceInfo.style.display = "none";
            educationInfo.style.display = "block";
        }
        else {
            skillInfo.style.display = "block";
            educationInfo.style.display = "none";
            experienceInfo.style.display = "none";
        }
    })
})

burgerMenu.addEventListener("click", function() {

    document.querySelector(".bur-menu").style.display = "block";
    burgerMenu.style.display = "none";

    window.addEventListener("resize", function() {
        const width = window.innerWidth;

         if(width > 539)
         {
            document.querySelector(".bur-menu").style.display = "none";
            burgerMenu.style.display = "none";

         }
         else if(width < 539){
            document.querySelector(".bur-menu").style.display = "none";
            burgerMenu.style.display = "block";
         }
      });
   

});

burDisapear.addEventListener("click", function() {
    document.querySelector(".bur-menu").style.display = "none";
     burgerMenu.style.display = "block";
})
