import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import products from "../products.json"
import { NavService } from '../side-nav/nav.service';

@Component({
  selector: 'app-inner-product',
  templateUrl: './inner-product.component.html',
  styleUrls: ['./inner-product.component.css']
})
export class InnerProductComponent implements OnInit {

  user:any
  opened:any
  selectedLang:any
  languages = this.langs.languages
  products: any = products
  activatedProduct: any;

  
  currentCountry:any = localStorage.getItem('country')
  currentLanguage:any = localStorage.getItem('language')

  constructor(private route:ActivatedRoute, private authService: AuthService, private langs: NavService) { }

  ngOnInit(): void {
    if(localStorage.getItem('opened') === null){
      this.opened = true
      this.selectedLang = true
    }else {
      this.opened = localStorage.getItem('opened') === 'true'
      this.selectedLang = localStorage.getItem('opened') === 'true'
    }

    this.route.params.subscribe((params: Params) => {
      let prod = params.product
      this.activatedProduct = this.products.find((p:any) => p.product === prod)
    })
    
    this.authService.currentuser$.subscribe((user) => {
      this.user = user
    })
  }

  setCurrentLang(country:string, lang:string){
    localStorage.setItem('country', country )
    localStorage.setItem('language', lang )
  }
  changeLang(val:string, cnt: string, lang: string){
    localStorage.setItem('lang', val)
    localStorage.setItem('opened', 'false')
    this.setCurrentLang(cnt, lang)
    window.location.reload();
  }
  
  signOut(){
    this.authService.auth.signOut()
  }

}
