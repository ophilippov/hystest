import {Component, Input} from '@angular/core';

@Component({
    selector: 'product-item',
    templateUrl:'./templates/productItem.template.html'
})
export class ProductItemComponent{
    //indicates whether this product on sale or not
    isOnSale: boolean = false;
    
    //a link to the image of the product
    @Input() imgSrc: string;

    //a name of the product
    @Input() name: string;

    //a direct link to the product page
    @Input() link:string;

    //a product`s price
    @Input() price: number;

    //a product`s short description
    @Input() description: string;

    _newPrice: number;
    //a sale price of the product
    @Input() set newPrice(_price: number){
        if(_price!=null){
            this.isOnSale = true;
        }
        else{
            this.isOnSale=false;
        }
        this._newPrice = _price;
    }
    get newPrice(){return this._newPrice}

}