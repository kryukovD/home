import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    let  goTopBtn=document.querySelector(".to-up ");
    goTopBtn!.addEventListener('click', backToTop);
   function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -30);
      setTimeout(backToTop);
    }
  }
  
  
}
scrollToBlock(e: Event) {
  const id = e.currentTarget as HTMLElement
  const valueId = id.getAttribute("data-id")
  if (valueId!=="main") {
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
  else {
    this.router.navigate([''])
    window.scrollTo({
      top: 0,
      left:0,
      behavior: "smooth"
    })
  }



}

  }