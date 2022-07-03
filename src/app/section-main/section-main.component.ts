import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-section-main',
  templateUrl: './section-main.component.html',
  styleUrls: ['./section-main.component.scss']
})
export class SectionMainComponent implements OnInit {
  @Output() onChange = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }
  changeStateMenu(){
    this.onChange.emit(true);
  }
  

}
