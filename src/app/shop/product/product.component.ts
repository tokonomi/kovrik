import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AuthService } from 'src/app/auth/auth.service';
import { NavService } from 'src/app/side-nav/nav.service';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  user:any
  itemInCart!:number;
  opened:any
  languages = this.langs.languages
  selectedLang:any
  product: any

  currentCountry:any = localStorage.getItem('country')
  currentLanguage:any = localStorage.getItem('language')
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
  constructor(private route: ActivatedRoute, private prodService: ProductService, private cartService: CartService, private langs:NavService, private authService: AuthService ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.product = this.prodService.getById(params.prod)
    })
    if(localStorage.getItem('opened') === null){
      this.opened = true
      this.selectedLang = true
    }else {
      this.opened = localStorage.getItem('opened') === 'true'
      this.selectedLang = localStorage.getItem('opened') === 'true'
    }

    this.cartService.numOfItems.subscribe((d:any) => {
      this.itemInCart = d.length
    })

    this.authService.currentuser$.subscribe((user) => {
      this.user = user
    })
  }
  changeLang(val:string, cnt: string, lang: string){
    localStorage.setItem('lang', val)
    localStorage.setItem('opened', 'false')
    this.setCurrentLang(cnt, lang)
    window.location.reload();
  }

  setCurrentLang(country:string, lang:string){
    localStorage.setItem('country', country )
    localStorage.setItem('language', lang )
  }
  signOut(){
    this.authService.auth.signOut()
  }
  refresh(): void {
    setTimeout(() => {
      window.location.reload();
    }, 1)
  }
  addToCart(prod: any){
    this.cartService.addItem(prod)
  }

}