import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  user: any;
  total: number = 0;
  items: any = [];

  constructor(private cartService: CartService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.cartService.numOfItems.subscribe(d => {
      this.items = d

      if(this.items) this.getTotal(this.items)
    })
    this.authService.currentuser$.subscribe((user) => {
      this.user = user
    })
  }

  onDelete(id:number){
    this.items.splice(id, 1)
    this.cartService.setCartData(this.items)
    this.getTotal(this.items)
    window.location.reload();
  }

  getTotal(data: any){
    let cprice = 0
    for(let item of data){
      cprice += item.price * item.qty
    }
    this.total = cprice
  }

  validateInput(event:any, i:number){
    const qty = +event.target.value;
    if(qty < 1 || qty > 5){
      event.target.value = this.items[i].qty
      return
    }
    this.QtyUpdate(qty, i)
    window.location.reload();
  }

  private QtyUpdate(qty: number, i: number){
    this.items[i].qty = qty
    this.cartService.setCartData(this.items)
  }

  onCheckOut(){
    this.authService.currentuser$.subscribe((user) => {
      if(!user){
        this.items.splice(0, this.items.length)
        this.router.navigate(['/login'])
      }else this.router.navigate(['/ordered'])
    })
  }
}
