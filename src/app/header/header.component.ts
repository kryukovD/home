import { Component, EventEmitter, OnInit, Output, ɵɵresolveBody } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() onInvoke = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  ngOnInit(): void {
    const header = document.querySelector("header")
    window.addEventListener("scroll", () => {
      if (window.scrollY >= header!.offsetHeight) {
        header?.classList.add("scrollingHeader")
      }
      else header?.classList.remove("scrollingHeader")
    })
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
