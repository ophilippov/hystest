import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { ProductItemComponent }   from './productItem.component';
import { ProductsComponent} from './products.component';
import { FilterComponent} from './filter.component';
import { FilterSectionComponent} from './filterSection.component';
import { TagsComponent} from './tags.component'

@NgModule({
    imports:      [ BrowserModule, FormsModule],
    declarations: [ AppComponent, ProductItemComponent, ProductsComponent, FilterComponent, FilterSectionComponent, TagsComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }