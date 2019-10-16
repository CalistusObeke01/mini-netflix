import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
  <div>
    <h2>
      error 404
    </h2>
  </div>
  `,
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
