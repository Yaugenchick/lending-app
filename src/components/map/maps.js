  
//import {location} from './location.json';
//const location = require('./location.json');
/*import  downArrow  from '../../image/arrowDown.png';
import twitter from '../../networks/twitter.png';
import Github from '../../networks/Github.png';
import facebook from '../../networks/facebook.png';
import Instagram from '../../networks/Instagram.png';
import dribbble from '../../networks/dribbble.png';*/
let location = [
    {
    coord: {lat:53.8525266 , lng:27.57019043},
    zoom: 3,
    title: 'Minsk',
    text: 'sales!',
    src: 'image/minsk.jpg',
    id: 1
  }, {
    coord: {lat:54.68653423 , lng:25.26855469},
    zoom: 3,
    title: 'Vilnius',
    text: 'sales!',
    src: '/networks/twitter.png',
    id: 2
  }, {
    coord:  {lat:56.89700392 , lng:23.90625},        
    zoom: 3,
    title: 'Riga',
    text: 'sales!',
    src: './networks/Github.png',
    id: 3
  }, {
    coord: {lat:53.63161061 , lng:23.81835938},
    zoom: 3,
    title: 'Grodno',
    text: 'sales!',
    src: '../networks/facebook.png',
    id: 4
  }, {
    coord: {lat:52.22779942, lng:20.96191406},
    zoom: 3,
    title: 'Warszawa',
    text: 'sales!',
    src: '../../networks/Instagram.png',
    id: 5
  }, {
    coord: {lat:50.44351305, lng:30.5090332},
    zoom: 3,
    title: 'Kiev',
    text: 'sales!',
    src: '../../networks/dribbble.png',
    id: 6
  }
]



let map;
let  InfoWindowContent = (element) => {
  console.log(element.src, element.text, element.title)
  return `<div class="infowindow-wraper">
            <h1 class="infowindow-title">${element.title}</h1>
            <img src=${element.src} width="20" height="20">
            <p class="infofindow-text">${element.text}</p>
        </div>`
}
export function initMap () {
    
      map = new google.maps.Map(document.getElementById('map'), {
      center: location[0].coord,
      zoom: location[0].zoom
    });

      location.map((element) => {
        console.log(element)
      let  marker = new google.maps.Marker({
          position: element.coord,
          map: map,
        });
      let infowindow = new google.maps.InfoWindow({
          content: InfoWindowContent(element)
        });
        //infowindow.open(map,marker);
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });
      
        google.maps.event.addListener(map, 'click', function() {
          infowindow.close();
        });
      });
  }
  window.initMap = window;

