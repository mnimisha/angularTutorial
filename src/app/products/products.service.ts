import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from './product';
import { Observable } from 'rxjs';
import { Catagory } from '../site-framework/catagory';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }

  //methods
  createProduct(productBody:any): Observable<Product>{
    const productUrl = 'http://localhost:3000/products';
    return this.httpClient.post<Product>(productUrl, productBody);
    
  }

  viewProduct(productId: any): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/'+productId;
    return this.httpClient.get<Product>(productUrl); //return observable
  }
  updateProduct(productBody: any,productId: any): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/'+productId;
    return this.httpClient.put<Product>(productUrl,productBody);
  }

  deleteProduct(productId: any){
    const productUrl = 'http://localhost:3000/products/'+productId;
    return this.httpClient.delete(productUrl);
  }

  searchCatagoryProduct(catagoryId: any){
    const productUrl = 'http://localhost:3000/products/catagory='+catagoryId;
    return this.httpClient.get(productUrl);
  }

  searchDateProduct(dateParam: any){
    const productUrl = 'http://localhost:3000/products/date='+dateParam;
    return this.httpClient.get(productUrl);
  }
  getAllProducts() : Observable<Product>{
    const productUrl = 'http://localhost:3000/products';
    return this.httpClient.get<Product>(productUrl);
  }
  getCatagories(): Observable<Catagory>{
    const catagoriesUrl = 'http://localhost:3000/products/catagories';
    return this.httpClient.get<Catagory>(catagoriesUrl);
  }

}
