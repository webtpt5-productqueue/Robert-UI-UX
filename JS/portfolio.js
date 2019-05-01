const portfolio = document.querySelector("#portfolio")
const fLi = document.querySelectorAll(".footer-link")
// Close the dropdown menu if the user clicks outside of it

fLi[3].addEventListener('click', function(){
  portfolio.classList.remove("hidden")
  let hideMe = document.querySelector('.pf')
  let addPadding = document.querySelectorAll('.portfolio a');
  hideMe.innerHTML = "";
});

portfolio.addEventListener('mouseout', function(){
  setTimeout(function(){
  portfolio.classList.add("hidden")
  let hideMe = document.querySelector('.pf')
  hideMe.innerHTML = "Portfolio Pages";
  }, 7000)
});
