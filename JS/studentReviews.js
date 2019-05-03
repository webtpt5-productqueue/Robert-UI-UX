//Create the JS Class and give it a name
class StudentReviews{
  //Create the constructor and enter in an appropriate value to be passed through
  constructor(imgFaces){
	//Sets element to the iterated item
    this.imgFaces = imgFaces;
	//This sets the image to be the first child element that is an image
    this.img = this.imgFaces.querySelector('img')
	//This assigns the data value of the img faces current div to this.data
    this.data = this.imgFaces.dataset.img;
	//This line associates the HTML element that has the same number of data-rev as this.data's data-img value
    this.review = document.querySelector(`.fc-column[data-rev='${this.data}']`)

	//This line creates an event listener that occurs whenever a designated image is clicked, the corresponding students text block is then displayed via the "select" method
    this.img.addEventListener('click', () => {
    this.select()
    })
  }
  //This is the nested method for this object
  select(){
	//Create a variable that is assignged to a nodelist of all the student reviews
    const studentReviews = document.querySelectorAll('.fc-column')
	//Use the forEach method on the new nodelist to remove the .active class from all elements in the nodelist
    studentReviews.forEach(rev => rev.classList.remove('active'));
	//Once an image is clicked, set that corresponding  student review to have the active class
    this.review.classList.add('active');
  }
}
// Create a variable that is assigned to the node list of all HTML elements that have the class of .imgFaces
const images = document.querySelectorAll('.imgFaces');
//This line uses a forEach method to iterate over every item in the nodelist that was just created and passes them through the StudentReviews class up above
images.forEach(imageFace => new StudentReviews(imageFace));