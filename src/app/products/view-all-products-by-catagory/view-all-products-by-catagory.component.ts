import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-all-products-by-catagory',
  templateUrl: './view-all-products-by-catagory.component.html',
  styleUrls: ['./view-all-products-by-catagory.component.css']
})
export class ViewAllProductsByCatagoryComponent implements OnInit {
  searchCatagory='';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data =>{
     this.searchCatagory = data.catagory;
    });
  }

}
