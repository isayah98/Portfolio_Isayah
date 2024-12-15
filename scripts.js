const aboutLinks = document.querySelectorAll(".links");
const skillInfo =document.querySelector("#skill");
const experienceInfo =document.querySelector("#experience");
const educationInfo =document.querySelector("#education");

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