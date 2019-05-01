class StudentReviews{
  constructor(imgFaces){
    //Sets element to the iterated item
    this.imgFaces = imgFaces;
    this.img = this.imgFaces.querySelector('img')
    this.data = this.imgFaces.dataset.img;
    this.review = document.querySelector(`.fc-column[data-rev='${this.data}']`)

    this.img.addEventListener('click', () => {
    this.select()
    })
  }
  select(){
    const studentReviews = document.querySelectorAll('.fc-column')
    studentReviews.forEach(rev => rev.classList.remove('active'));
    this.review.classList.add('active');
  }
}

const images = document.querySelectorAll('.imgFaces');
images.forEach(imageFace => new StudentReviews(imageFace));