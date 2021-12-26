import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  categorieItem: any
  categorieData: any
  bestSellers:any
  active: boolean = false
  constructor(private router: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      console.log(params)
      this.categorieData = this.productService.getById(params.categorie)
      console.log(this.categorieData)
    })

    this.router.params.subscribe((params: Params) => {
      this.categorieItem = this.productService.getByCategorie(params.categorie)
      this.bestSellers = this.categorieItem.filter((i: any) => i.bestSeller === true)
    })
    console.log(this.categorieItem)
    console.log(this.bestSellers)
    console.log(this.categorieData)
  }

  onMouseEnter(){
    this.active = true
  }
  onMouseLeave(){
    this.active = false
  }
}
