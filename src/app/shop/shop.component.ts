import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AuthService } from '../auth/auth.service';
import { NavService } from '../side-nav/nav.service';
import { CarouselService, Slide } from './carousel.service';
import { CartService } from './cart/cart.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  search!: string;
  foundItems: any;
  items = this.carousel.productItems
  user:any
  itemInCart!:number;
  opened:any
  selectedLang:any
  languages = this.langs.languages
  isDragging:any
  cardCarousel:OwlOptions = this.carousel.customOptions
  mainSlider:OwlOptions = this.carousel.mainSlideOptions
  cardsData: any = this.carousel.cards
  mainSliderData: any = this.carousel.mainSlider
  accessories: any = this.carousel.categories
  currentCountry:any = localStorage.getItem('country')
  currentLanguage:any = localStorage.getItem('language')

  
  constructor(private carousel: CarouselService, private langs: NavService, private cartService: CartService, private authService: AuthService,private modalService: NgbModal) {

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
  openXl(content:any) {
    this.modalService.open(content, { size: 'xl' });
  }

  onSeacrh(){
    this.foundItems = this.items.filter((i:any) => {
      return i.titleSearch.toLowerCase().includes(this.search.toLowerCase())
    })
  }

}
