import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WorksService, Work } from '../works.service';
import { ConfigService } from '../../config.service';
import { mergeMap } from 'rxjs/operators';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import SwiperCore, { SwiperOptions } from 'swiper';
import { SwiperComponent } from "swiper/angular";
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  @Output() onLoaded = new EventEmitter<boolean>()
  public clickedImage?: any
  public url?: string
  public works?: Work[]
  public cfg: any
  configSlider: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 50,
    navigation: false,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    breakpoints:{
      0:{
        slidesPerView:1
      },
      768:{
        slidesPerView:2
      },
      1400:{
        slidesPerView:4
      }
    }
  };

  constructor(public modalService: NgbModal, public workService: WorksService, private configService: ConfigService) { }

  ngOnInit(): void {
    this.configService.getConfig().pipe(mergeMap((cfg: any) => {
      this.cfg = JSON.parse(cfg)
      return this.workService.getAllWorks(JSON.parse(cfg).allWorks)
    })).subscribe(data => {
      this.works = data
      this.onLoaded.emit(true)
    })
  }
  next(): void {
    console.log("true");
    this.swiper!.swiperRef.slideNext(500);

  }
  prev(): void {
    this.swiper!.swiperRef.slidePrev(500);
  }
  openModal(content: any, event: any): void {
    this.clickedImage = event.currentTarget.src
    const img = event.currentTarget
    const url = img.getAttribute("data-url")
    this.url = url
    this.modalService.open(content, { size: "xl", animation: true })
  }

}
