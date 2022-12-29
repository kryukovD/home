import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {
  @Output() closeDisplay = new EventEmitter<boolean>(false)
  mobileMenu:boolean=false
  constructor(private router: Router) { }

  ngOnInit(): void {
    let mobileBtn=document.getElementById("mobileBtn")
    let close=document.getElementById("closeMenu")
    mobileBtn?.addEventListener("click",()=>{
      this.toggleMenu()
    })
    close?.addEventListener("click",()=>{
      this.close()
    })
  }

  close(){
    if(this.mobileMenu==true) this.mobileMenu=false
  }
  toggleMenu():void{
    this.mobileMenu=!this.mobileMenu;
  }
  scrollToBlock(e: Event) {
    this.mobileMenu=false
    const id = e.currentTarget as HTMLElement
    const valueId = id.getAttribute("data-id")
    if (this.router.url !== "/") {
      this.router.navigate([''], { state: { id: valueId } })
    }
    else {
      const offsetTop = document.querySelector("header")!.offsetHeight
      const elementPosition = document.getElementById(`${valueId}`)!.getBoundingClientRect().top - offsetTop
     
      window.scrollBy({
        top: elementPosition,
        behavior: "smooth"
      })
    }



  }

}
