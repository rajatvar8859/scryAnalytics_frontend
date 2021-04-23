import { Component, OnInit, Input, ViewChild, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Paginator } from 'primeng/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent implements OnInit, AfterViewInit {
  @Input() count: number;
  @Output() change = new EventEmitter<any>();

  pageLength = 20;

  @ViewChild('p', { static: true }) paginator: Paginator;

  constructor() { }

  ngOnInit() {
  }

  paginate(event) {
    this.change.emit({ start: event.first || 0, length: event.rows || 30 });
  }

  ngAfterViewInit() {
  }
}
