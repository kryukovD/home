import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {
  @Input() display?:boolean
  @Output() closeDisplay = new EventEmitter<boolean>(false)
  constructor() { }

  ngOnInit(): void {
    
  }
  close(){
    this.closeDisplay.emit(false)
  }
 

}
