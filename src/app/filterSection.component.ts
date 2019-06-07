import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'filter-section',
    templateUrl:'./templates/filterSection.template.html'
})
export class FilterSectionComponent{
    
    //header of the current section
    @Input() header: string;

    //filter items collection for the current section
    @Input() items: FilterItem[];

    //an event that is fired when any filter is being clicked
    @Output() onStateChanged = new EventEmitter<void>();
    
    //handler for the click event of each filter item
    stateChanged(){
        setTimeout(()=>this.onStateChanged.emit(), 0);
    }
}

//a class that represents a filter item
export class FilterItem{
    header: string;
    value: string;
    amount: number;
    isChecked: boolean;
}