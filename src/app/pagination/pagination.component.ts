import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
export interface MyPagination {
  itemsCount: number;
  pageSize: number;
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent implements OnInit {
  public pagesArray: Array<number> = [];
  public currentPage: number = 1;
  @Output() goToPage = new EventEmitter();
  @Input() set setPagination(pagination: MyPagination) {
    if (pagination) {
      const pagesAmount = Math.ceil(
        pagination.itemsCount / pagination.pageSize
      ); this.pagesArray = new Array(pagesAmount).fill(1);
    }
  }

  constructor() { }

  ngOnInit(): void {

  }
  public setPage(pageNumber: number): void {

    // Запретить изменения, если была выбрана та же страница
    if (pageNumber === this.currentPage)
      return;
    this.currentPage = pageNumber;
    this.goToPage.emit(pageNumber);
  }

}
