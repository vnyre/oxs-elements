import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'oxs-document-view',
  template: `
    <p>
      document-view works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class DocumentViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
