import { Injectable } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import productsData from '../product.json';
import productItems from '../product-items.json';

export interface Slide{
  src: string
  id?: number
  href: string
}

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  productItems = productItems.products
  prods: any = productsData
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 400,
    navText: [],
    responsive: {
      0: {
        items: 1,
        dots: true
      },
      500: {
        items: 1,
        dots: true
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: false
  }

  mainSlideOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 400,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

  mainSlider: any = this.prods.products
  cards: any = this.prods["cards-products"]
  categories: any = this.prods.categories

  constructor() { }
}

// {
        //     "categorie-title": "kitchen-title",
        //     "title": "title5",
        //      "col": 1,
        //      "row": 2,
        //      "color": "#DDBDF1"},
        // {
        //     "categorie-title": "kitchen-title",
        //     "title": "title6",
        //      "col": 1,
        //      "row": 1,
        //      "color": "lightblue"},
        // {
        //     "categorie-title": "kitchen-title",
        //     "title": "title7",
        //      "col": 1,
        //      "row": 1,
        //      "color": "lightgreen"},
        // {
        //     "categorie-title": "kitchen-title",
        //     "title": "title8",
        //      "col": 2,
        //      "row": 1,
        //      "color": "lightblue"}