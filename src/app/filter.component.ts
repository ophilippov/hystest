import {Component, Input, Output, EventEmitter} from '@angular/core';
import {FilterItem} from './filterSection.component';

@Component({
    selector: 'filter',
    templateUrl:'./templates/filter.template.html'
})
export class FilterComponent{

    //filter sections to display
    @Input() sections: FilterSection[];

    //an event that is fired when any filter changes its state
    @Output() onFilterChanged = new EventEmitter<void>();
    
    //handler for the onStateChanged event of each filter section
    filterChanged(){
        this.onFilterChanged.emit();
    }
}

//a class that represents a filter section
export class FilterSection{
    header: string;
    items: FilterItem[];
}