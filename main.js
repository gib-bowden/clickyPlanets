var planets = [{
  name: 'mercury',
  url: 'https://www.nasa.gov/sites/default/files/mercury_1.jpg'
}, {
  name: 'venus',
  url: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Venus_globe.jpg'
}, {
  name: 'earth',
  url: 'https://www.nasa.gov/centers/goddard/images/content/638831main_globe_east_2048.jpg'
}, {
  name: 'mars',
  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Mars_23_aug_2003_hubble.jpg/275px-Mars_23_aug_2003_hubble.jpg'
}, {
  name: 'jupiter',
  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Hubble_Captures_Vivid_Auroras_in_Jupiter's_Atmosphere.jpg/220px-Hubble_Captures_Vivid_Auroras_in_Jupiter's_Atmosphere.jpg"
}, {
  name: 'saturn',
  url: 'http://nssdc.gsfc.nasa.gov/image/planetary/saturn/saturn.jpg'
}, {
  name: 'uranus',
  url: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg'
}, {
  name: 'neptune',
  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/260px-Neptune_Full.jpg'
}];

var planetContainer = document.getElementById("planets-container")


function domBuilder () {
	var planetString = "";
	for (var i=0; i < planets.length; i++) {
		var newPlanet = "";
		newPlanet += `<div class="planet-tile" id="planet-tile-${i}">`
		newPlanet += `<div class="planet-name" id="${planets[i].name}">${planets[i].name}</div>`
		newPlanet += `<img class="planet-image" src="${planets[i].url}">`;
		newPlanet += `</div>`
		planetString += newPlanet;
	}
	writeToDom(planetString)
}

function writeToDom(str) {
	planetContainer.innerHTML = str;
}


var getPlanetsButton = document.getElementById("show-planets-btn");

getPlanetsButton.addEventListener("mouseenter", domBuilder);


// domBuilder();


