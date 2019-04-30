/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
const gitHub = document.querySelector("#github")
const li = document.querySelectorAll(".footer-link")

// Close the dropdown menu if the user clicks outside of it


li[2].addEventListener('mouseenter', function(){
  gitHub.classList.remove("hidden")
  let hideMe = document.querySelector('.dropbtn')
  let addPadding = document.querySelector('')
  hideMe.style.innerHTML = "none";
});