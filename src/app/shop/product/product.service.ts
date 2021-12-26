import { Injectable, OnInit } from '@angular/core';
import productDatas from "../../product-items.json";
import categorieData from "../../product.json"

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit{

  productDatas: Array<any> = productDatas.products
  categorieDatas: any = categorieData

  constructor() {}

  ngOnInit(){}
  getById(id: string){
    return this.productDatas.find(p => p.href === id)
  }
  getByCategorie(name: string){
    return this.categorieDatas[name]
  }
}
