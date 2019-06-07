import {Component, Input,Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'tags',
    templateUrl: './templates/tags.template.html'
})
export class TagsComponent{
    //a tags collection
    @Input() tags: string[];

    //an event that is fired when any tag is being clicked
    @Output() onTagClick = new EventEmitter<string>();

    //an event that is fired when the reset button is being clicked
    @Output() onResetClick = new EventEmitter<void>();

    //handler for the click event of any tag
    deleteClick(tagName:string){
        this.onTagClick.emit(tagName);
    }

    //handler for the click event of the reset button
    resetClick(){
        this.onResetClick.emit();
    }
}
