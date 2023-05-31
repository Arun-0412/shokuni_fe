import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) { }

  private pageTitle:String = 'sales';

  private saloonId:number;

  ngOnInit() {
    this.saloonId = this.activeRoute.snapshot.params["id"] || null;
    //alert(this.saloonId);
  }
}
