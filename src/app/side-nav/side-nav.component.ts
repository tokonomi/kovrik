
import { Component, OnInit} from '@angular/core';
import { Product } from '../content/content.service';
import { NavService } from './nav.service';
import producCollection from '../products.json'
import { ProductService } from '../shop/product/product.service';
import { CartService } from '../shop/cart/cart.service';
import { RouterOutlet } from '@angular/router';
import {slider} from './route-animation'
import { AuthService } from '../auth/auth.service';



@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  animations: [
    slider
  ]
})
export class SideNavComponent implements OnInit{

  user:any
  itemInCart!:number;
  prods:Product[] = producCollection
  opened:any
  languages = this.langs.languages
  selectedLang:any
  headVar!: boolean

  currentCountry:any = localStorage.getItem('country')
  currentLanguage:any = localStorage.getItem('language')

  constructor(private langs: NavService, private authService: AuthService, private cartService: CartService) { }

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }

  ngOnInit(): void {
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
}



