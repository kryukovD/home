import { Component } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'home';

 
  constructor(private configService:ConfigService){
    
  }
  ngOnInit(){
 
  }



}
