import { Component, Input } from '@angular/core';
import {ProductItem} from './app.component';
      
@Component({
    selector: 'products',
    templateUrl: './templates/products.template.html'
})
export class ProductsComponent { 

    //a products collection
    @Input() products: ProductItem[];
}

