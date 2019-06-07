import {Component, OnInit} from '@angular/core';
import {FilterSection} from './filter.component';
import { FilterItem } from './filterSection.component';
      
@Component({
    selector: 'hys-app',
    templateUrl: './templates/app.template.html'
})
export class AppComponent implements OnInit{

    //search results
    productsSearch: ProductItem[];

    //filtered resuluts that can be displayed
    productsFiltered: ProductItem[];

    //filters collection
    filterSections: FilterSection[];

    //filter tags collection
    filterTags: string[];

    //initializes this class
    ngOnInit(): void {
        
        //get search result data
        this.getSearchData();
       
        //set up filters 
        this.updateFilter();
       
        //update view
        this.updateView();
        
    }

    //provides some dummy data
    //must be replaced by the Db query, etc.
    getSearchData(){
        this.productsSearch=
        [
            {
                name:"Ноутбук Lenovo IdeaPad 330-15AST (81D600JYRA) Onyx Black Суперцена!!!",
                imgSrc:"assets/img/notebook.jpg",
                link:"https://google.com",
                priceUAH: 2756,
                newPriceUAH: 2299,
                description:"Экран 15.6\" TN+film (1366x768) HD, матовый / двухядерный AMD E2-9000 (1.8 - 2.2 ГГц) / RAM 4 ГБ / SSD 500 ГБ / AMD Radeon R2 Graphics / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / Windows 10  / 2.2 кг / черный",
                processor: "AMD E",
                processorCoresAmount: 2,
                diagonalIn: 15.6,
                manufacturer: "Lenovo",
                ramCapacityGb: 4,
                storageType: "SSD",
                os: "Windows 10",
                storageCapacityGb: 500,
                paymentFeatures: "0% на 10 месяцев"
            },
            {
                name:"Ноутбук HP 250 G6 (5PP08EA) Dark Ash Суперцена!!!",
                imgSrc:"assets/img/notebook2.jpg",
                link:"https://google.com",
                priceUAH: 13999,
                newPriceUAH: 11399,
                description:"Экран 16.0\" SVA (1920x1080) Full HD, матовый / четырёхядерный Intel Core i3-7020U (2.3 ГГц) / RAM 8 ГБ / HDD 1 ТБ / Intel HD Graphics 620 / DVD+/-RW / LAN / Wi-Fi / Bluetooth / веб-камера / DOS / 1.86 кг / черный",
                processor: "Intel Core i3",
                processorCoresAmount: 4,
                diagonalIn: 16.0,
                manufacturer: "HP",
                ramCapacityGb: 8,
                storageType: "HDD",
                os: "DOS",
                storageCapacityGb: 1000,
                paymentFeatures: "Оплата частями"
            },
            {
                name:"Ноутбук Dell Inspiron 3573 (N4000/4/500/WIN) Black Суперцена!!!",
                imgSrc:"assets/img/notebook3.jpg",
                link:"https://google.com",
                priceUAH: 8199,
                newPriceUAH: 6999,
                description:"Экран 15.6\" (1366x768) WXGA HD,матовый / двухядерный Intel Celeron N4000 (1.1 - 2.6 ГГц) / RAM 4 ГБ / HDD 500 ГБ / Intel UHD Graphics 600 / DVD±RW / Wi-Fi / Bluetooth / веб-камера / Windows 10 Home / 2.25 кг / черный",
                processor: "Intel Celeron",
                processorCoresAmount: 2,
                diagonalIn: 15.6,
                manufacturer: "Dell",
                ramCapacityGb: 4,
                storageType: "HDD",
                os: "Windows 10",
                storageCapacityGb: 500,
                paymentFeatures: "Оплата частями"
            },
            {
                name:"Ноутбук Lenovo IdeaPad 330-15IKB (81DC00R6RA) Platinum Grey Суперцена!!!",
                imgSrc:"assets/img/notebook4.jpg",
                link:"https://google.com",
                priceUAH: 12999,
                newPriceUAH: null,
                description:"Экран 15.6\" (1920x1080) Full HD, матовый / четырёхядерный Intel Core i3-6006U (2.0 ГГц) / RAM 8 ГБ / SSD 256 ГБ / Intel HD Graphics 520 / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / Windows 10 / 2.2 кг / серый",
                processor: "Intel Core i3",
                processorCoresAmount: 4,
                diagonalIn: 15.6,
                manufacturer: "Lenovo",
                ramCapacityGb: 8,
                storageType: "SSD",
                os: "Windows 10",
                storageCapacityGb: 256,
                paymentFeatures: null
            },
            {
                name:"Ноутбук ASUS VivoBook 15 X542UF-DM262 (90NB0IJ3-M03720) Golden Суперцена!!!",
                imgSrc:"assets/img/notebook2.jpg",
                link:"https://google.com",
                priceUAH: 16499,
                newPriceUAH: 14999,
                description:"Экран 17.4\" (1920x1080) Full HD, матовый / двухядерный Intel Core i3-8130U (2.2 - 3.4 ГГц) / RAM 8 ГБ / SSD 256 ГБ / nVidia GeForce MX130, 2 ГБ / DVD Super Multi / LAN / Wi-Fi / Bluetooth / веб-камера / Endless OS / 2.3 кг / золотистый",
                processor: "Intel Core i3",
                processorCoresAmount: 2,
                diagonalIn: 17.4,
                manufacturer: "Asus",
                ramCapacityGb: 8,
                storageType: "SSD",
                os: "Endless OS",
                storageCapacityGb: 256,
                paymentFeatures: "Оплата частями"
            },
            {
                name:"Ноутбук HP 255 G6 (5TK86EA) Dark Ash Суперцена!!!",
                imgSrc:"assets/img/notebook3.jpg",
                link:"https://google.com",
                priceUAH: 10499,
                newPriceUAH: null,
                description:"Экран 17.0\" SVA (1920x1080) Full HD, матовый / двухядерный AMD Dual-Core A6-9225 (2.6 - 3.0 ГГц) / RAM 8 ГБ / HDD 1 ТБ / AMD Radeon R4 / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / DOS / 1.86 кг / черный",
                processor: "AMD Dual-Core A6",
                processorCoresAmount: 2,
                diagonalIn: 17.0,
                manufacturer: "HP",
                ramCapacityGb: 8,
                storageType: "HDD",
                os: "DOS",
                storageCapacityGb: 1000,
                paymentFeatures: "0% на 10 месяцев"
            }
            
    
        ];
    }


    //creates the filters collection according to the received search data
    //NOTE: the 'header' property here is hardcoded, so it needs to be replaced
    //by something like this: FilterHeaderDictionary.get(nameof(product.paymentFeatures))
    //But nameof() is not available yet in TypeScript as like as a Dictionary,
    //and this features could be added using third-part libraries
    //but it left like it is to avoid redundant code for a such small app
    updateFilter(){
        this.filterSections =
        [
            {
                header: "Беспроцентный кредит",
                items: this.filterItemsFromArray(this.productsSearch.map(product=>String(product.paymentFeatures)))
            },
            {
                header: "Процессор",
                items: this.filterItemsFromArray(this.productsSearch.map(product=>String(product.processor)))
            },
            {
                header: "Ядра процессора",
                items: this.filterItemsFromArray(this.productsSearch.map(product=>String(product.processorCoresAmount)), ' ядра')
            },
            {
                header: "Диагональ экрана",
                items: this.filterItemsFromArray(this.productsSearch.map(product=>String(product.diagonalIn)), '\"')
            },
            {
                header: "Производитель",
                items: this.filterItemsFromArray(this.productsSearch.map(product=>String(product.manufacturer)))
            },
            {
                header: "Объем оперативной памяти",
                items: this.filterItemsFromArray(this.productsSearch.map(product=>String(product.ramCapacityGb)), ' ГБ')
            },
            {
                header: "Тип накопителя",
                items: this.filterItemsFromArray(this.productsSearch.map(product=>String(product.storageType)))
            },
            {
                header: "Объем накопителя",
                items: this.filterItemsFromArray(this.productsSearch.map(product=>String(product.storageCapacityGb)), ' ГБ')
            },
            {
                header: "Операционная система",
                items: this.filterItemsFromArray(this.productsSearch.map(product=>String(product.os)))
            }
        ];
    }

    //creates an array of the filter items 
    //according to the passed array of values
    filterItemsFromArray(array: Array<string>, headerPattern: string = null):Array<FilterItem>{
        //sort the array
        array.sort();
        var filterArray = new Array<FilterItem>();

        //distinct and count repeating values
        //and create a FilterItem for the each unique value 
        var current: string  = null;
        var cnt: number = 0;
        for(var i=0; i<array.length; i++){
            if(current != array[i]){
                if(cnt>0 && current!="null"){
                    filterArray.push({value:current, header: headerPattern!=null? current+headerPattern : current, amount: cnt, isChecked:false});
                    
                }
                current = array[i];
                cnt=1;
            }
            else{
                cnt++;
            }
        }
        if(cnt > 0) filterArray.push({value:current, header: headerPattern!=null? current+headerPattern : current, amount: cnt, isChecked:false});
        return filterArray;
    }

    //updates the view
    updateView(){
        this.updateTags();
        this.updateFilteredProducts();
    }

    //updates tags that are indicating filters that are currently checked
    updateTags(){
        var tags: string[] = new Array();
        this.filterSections.forEach(section => {
            section.items.forEach(item => {
                if(item.isChecked==true){
                    tags.push(item.header);
                }
            });
        });
        this.filterTags=tags;
    }

    //perform filtering on the search results according to checked filters
    //NOTE: read the description of updateFilter() method about hardcoded strings here 
    updateFilteredProducts(){
        this.productsFiltered = this.productsSearch.filter((product)=>{
            return this.filterProduct(product.paymentFeatures, "Беспроцентный кредит")&&
                    this.filterProduct(product.processor, "Процессор")&&
                    this.filterProduct(String(product.processorCoresAmount), "Ядра процессора")&&
                    this.filterProduct(String(product.diagonalIn), "Диагональ экрана")&&
                    this.filterProduct(product.manufacturer, "Производитель")&&
                    this.filterProduct(String(product.ramCapacityGb), "Объем оперативной памяти")&&
                    this.filterProduct(product.storageType, "Тип накопителя")&&
                    this.filterProduct(String(product.storageCapacityGb), "Объем накопителя")&&
                    this.filterProduct(product.os, "Операционная система");
        });
    }

    //filters product by one property
    filterProduct(productPropertyValue: string, filterSectionHeader:string): boolean{
        var paymentFeatureSection = this.filterSections.find((section)=>section.header==filterSectionHeader);
        var isAllUnchecked: boolean = true;
        for(var item of paymentFeatureSection.items){
            if(item.isChecked){
                if(productPropertyValue==item.value){
                   return true;
                } 
                isAllUnchecked = false;
            }
        }
        return isAllUnchecked;
    }

    
    //deletes all search tags and resets filters
    onResetTagClick(){
        this.filterSections.forEach(section => {
            section.items.forEach(item => {
              item.isChecked=false;
            });
        });
        this.updateView();
    }

    //deletes the selected tag and resets the filter this tag was indicating
    onTagClick(tagName: string){
        this.filterSections.forEach(section => {
            section.items.forEach(item => {
              if(item.header==tagName) 
                item.isChecked=false;
            });
        });
        this.updateView();
    }

}

//a class that represents a product item
export class ProductItem{
    name: string;
    imgSrc: string;
    link: string;
    priceUAH: number;
    newPriceUAH: number;
    description: string;
    processor: string;
    processorCoresAmount: number;
    diagonalIn: number;
    manufacturer: string;
    ramCapacityGb: number;
    storageType: string;
    os: string;
    storageCapacityGb: number;
    paymentFeatures: string
}




