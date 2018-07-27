var myPics = [
  { caption: "Big Antique Store", url: "images/antiqueStore.jpg" },
  { caption: "Inle Lake", url: "images/lake.jpg" },
  { caption: "Mt Popa at Golden Hour", url: "images/sunset.jpg"  },
  { caption: "Yeah I travel to places", url: "images/bagan.jpg" },
  { caption: "SEC Sportsball Fan", url: "images/SECfan.jpg" }
];
var lightBox = $('.lightBox'); // div tag(set to display none as default)
var lightBoxImage = $('.lightBoxImage'); //image tag
var container = $('.theImages'); //ol tag 

var lightBoxOn = function (event) {
  var index = $(event.target).attr("data-index") 
  var image = myPics[index] 
  lightBox.attr("class", 'lightBoxOn')
  lightBoxImage.attr("src", (image.url)) // to the image tag
}

var lightBoxOff = function(){   //this actually turns OFF the lightbox
  lightBox.attr("class", "lightBox")
}

var indexVal = [];


myPics.forEach(function(image, index)  {
  
  var newImage = $('<img>');
  newImage.attr('src', image.url );
  newImage.addClass('image');
  newImage.attr('data-index', index);

  var imageContainer = $('<div>');
  imageContainer.addClass('pics');

  var caption = $('<p>');
  caption.text(image.caption);


  var listItem = $('<li>');
  listItem.addClass('listItem');

  imageContainer.append(newImage);
  listItem.append(imageContainer);
  listItem.append(caption);
  imageContainer.on('click', lightBoxOn);
  container.append(listItem);

  indexVal.push(index);
});
lightBox.on("click", lightBoxOff);


 
