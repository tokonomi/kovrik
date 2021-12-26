import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  placeholder:any = []
  numOfItems = new BehaviorSubject([])


  constructor() {
    const ls = this.getCartData()
    if(ls) this.numOfItems.next(ls)
  }

  addItem(product: any){
    const ls = this.getCartData()

    let exist: any;

    if(ls)
      exist = ls.find((i:any) => {
        return i.id === product.id
      })
    
    if(exist){
      exist.qty++;
      this.setCartData(ls)
    }else{
      if(ls){
        const newData = [...ls, product];
        this.setCartData(newData)
        this.numOfItems.next(this.getCartData());
      }else{
        this.placeholder.push(product);
        this.setCartData(this.placeholder)
        this.numOfItems.next(this.getCartData())
      }
    }
  }

  setCartData(data: any){
    localStorage.setItem('cart', JSON.stringify(data));
  }

  getCartData(){
    return JSON.parse(localStorage.getItem('cart')!)
  }
}
