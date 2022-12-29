import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Validators} from "@angular/forms"
import { RequestFormService } from '../request-form.service';
declare var ymaps:any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  formRequest=new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(3)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    message: new FormControl(null,[Validators.required])
  })
  constructor(private formRequestService:RequestFormService) { }

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

  sendForm(){
  
    if( (this.formRequest.get("name")!.errors===null) && (this.formRequest.get("email")!.errors===null) && (this.formRequest.get("message")!.errors===null) ){
      this.formRequestService.sendFormToServer(this.formRequest.value).subscribe((response:any)=>{
        document.getElementsByClassName("wrap-send-form")[0].innerHTML=`<p class="responseFormMessage"> ${response.message} </p>`
      })
    }
    else{
      this.formRequest.get("name")?.markAsDirty()
      this.formRequest.get("email")?.markAsDirty()
      this.formRequest.get("message")?.markAsDirty()
    }

  }
 

}

