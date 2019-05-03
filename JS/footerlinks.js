class Dropdown{
  constructor(li){
    this.li = li;
    this.button = this.li.querySelector('.dropbtn')
    this.wrapper = this.li.querySelector('.dropdown-wrapper')

    // Event listeners
    this.button.addEventListener('mouseenter', () => {
      this.open();
    })
    this.wrapper.addEventListener('mouseleave', () => {
      this.close()
    })
  }
  //Nested Methods

  open(){
    this.wrapper.classList.remove('hidden')
    this.button.style.display ='none';
  }
  close(){

      this.wrapper.classList.add('hidden')
      this.button.style.display = 'inline-block';
 
  }
}


const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => new Dropdown(dropdown));