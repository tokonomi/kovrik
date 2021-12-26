import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AuthService } from '../auth/auth.service';
import products from '../products.json'

@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.css']
})
export class ProductOrderComponent implements OnInit {

  products: any = products
  currentProduct: any;
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: [],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router){

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params)
      this.currentProduct =  this.products.find((i:any) => i.product === params.product)
    })
    console.log(this.currentProduct)
  }
  onCheckOut(){
    this.authService.currentuser$.subscribe((user) => {
      if(!user){
        this.router.navigate(['/login'])
      }else this.router.navigate(['/ordered'])
    })
  }

}
