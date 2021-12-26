import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartService.setCartData('')
  }
  refresh(): void {
    setTimeout(() => {
      window.location.reload();
    }, 1)
  }

}
