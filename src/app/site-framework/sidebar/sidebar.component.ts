import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/products.service';
import { Catagory } from '../catagory';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  catagoryList: Catagory;

  constructor(private productsService: ProductsService) { }
  
  ngOnInit(): void {
    this.productsService.getCatagories().subscribe(data =>{
      this.catagoryList = data;
    });
  }

}
