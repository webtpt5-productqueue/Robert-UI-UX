/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function gitHub() {
  document.querySelector("#github-socialMedia").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it


gitHub.addEventListener('click', function(e){
  if(!e.target.matches('.dropbtn')){
    let dropdowns = document.querySelector('.dropdown-gituhub')
    if(dropdowns.classList.contains('show')){
      dropdowns.classList.remove('show');
    }
  }
})