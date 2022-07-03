import { Component, OnInit } from '@angular/core';
declare var ymaps:any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    ymaps.ready().then(() => {
    const myMap =new ymaps.Map('map', {
        center:[61.78021990302531,34.347837237434334],
        zoom: 18
      });
  
      var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        balloonContentBody: [
            '<address>',
            '<strong>Наш офис</strong>',
            '</address>'
        ].join('')
    }, {
        preset: 'islands#redDotIcon'
    });
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
    });
    
  }
 

}

