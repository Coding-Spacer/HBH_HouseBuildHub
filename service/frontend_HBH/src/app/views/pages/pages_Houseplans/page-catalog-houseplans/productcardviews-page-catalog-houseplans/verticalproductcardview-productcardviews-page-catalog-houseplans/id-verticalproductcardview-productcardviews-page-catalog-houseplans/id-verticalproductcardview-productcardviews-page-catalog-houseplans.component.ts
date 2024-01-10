
import { Component, OnInit } from '@angular/core';



@Component({
  selector:
    'app-id-verticalproductcardview-productcardviews-page-catalog-houseplans',
  templateUrl:
    './id-verticalproductcardview-productcardviews-page-catalog-houseplans.component.html',
  styleUrls: [
    './id-verticalproductcardview-productcardviews-page-catalog-houseplans.component.css',
  ],
})
export class IdVerticalproductcardviewProductcardviewsPageCatalogHouseplansComponent
  implements OnInit
{

  id_Houseplan: number = 100;
  type_Houseplan: string = 'bbb';


  constructor() {}

  ngOnInit() {
    this.id_Houseplan = 200;
    this.type_Houseplan = 'ZEH';
  }

  addToFavorites() {
    this.id_Houseplan = 10000000;
    this.type_Houseplan = 'HHH';
  }
}

