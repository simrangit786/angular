
import {Component,  Input,  OnInit, EventEmitter, Output} from '@angular/core';

@Component({
    selector:'app-test',
    template: `
    <h2>{{"Hello" + name}}</h2>
    <button (click) = "FireEvent()">Send Event</button>
    `,
    styles:[]

})
export class TestComponent implements OnInit{

    @Input('parentData') public name;
    @Output() public childevent = new EventEmitter();

    constructor(){

    }
    ngOnInit(){

    }
    FireEvent(){
        this.childevent.emit("Hello Codevolution");
    }

}