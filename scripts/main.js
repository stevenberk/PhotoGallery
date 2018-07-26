var myPics = [
  { caption: "Big Antique Store", url: "images/antiqueStore.jpg" },
  { caption: "Inle Lake", url: "images/lake.jpg" },
  { caption: "Mt Popa at Golden Hour", url: "images/sunset.jpg"  },
  { caption: "Yeah I travel to places", url: "images/bagan.jpg" },
  { caption: "SEC Sportsball Fan", url: "images/SECfan.jpg" }
];
var lightBox = document.querySelector('.lightBox'); // div tag(set to display none as default)
var lightBoxImage = document.querySelector('.lightBoxImage'); //image tag
var container = document.querySelector('.theImages'); //ul tag 


var lightBoxOn = function (event) {
  var index = event.target.getAttribute("data-index")
  var image = myPics[index] 
  lightBox.setAttribute("class", 'lightBoxOn')
  lightBoxImage.setAttribute("src", (image.url)) // to the image tag
  console.log(event);
}

var lightBoxOff = function(){   //this actually turns OFF the lightbox
  lightBox.setAttribute("class", "lightBox")
  
}

for (var index = 0; index < myPics.length; index++) {

var image = myPics[index]
  var newImage = document.createElement('img');
  newImage.setAttribute('src', image.url );
  newImage.classList.add('image');
  newImage.setAttribute('data-index', index);

  var imageContainer = document.createElement('div');
  imageContainer.classList.add('pics');

  var caption = document.createElement('p');
  caption.textContent = image.caption;

  var listItem = document.createElement('li');
  listItem.classList.add('listItem');


 

  imageContainer.appendChild(newImage);
  listItem.appendChild(imageContainer);
  listItem.appendChild(caption);
  imageContainer.addEventListener('click', lightBoxOn);
  container.appendChild(listItem);
  
}
lightBox.addEventListener("click", lightBoxOff);






