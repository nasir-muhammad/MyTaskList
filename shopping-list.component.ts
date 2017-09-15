import { Component } from '@angular/core';
import { ShoppingListService } from  './shopping-list.service';
import { OnInit } from '@angular/core';


@Component({
    selector:'shopping-list',
    template:`
    <section>
    <shopping-list-new-item></shopping-list-new-item>
    </section>
    <section>
    <h3>My List</h3>
    Fiter:
    <input type="text" #addedvalue (keyup)='0'/>
    <div class="list">
    <ul>
        <li *ngFor="let items of listitem | myFilter:addedvalue.value" (click)="onSelect(items)" >{{items.name}} ({{items.amount}}) </li>
    </ul>
    </div>
    </section>
    <section *ngIf = "selecteditem != null">
    <shopping-list-item [itemselected] = "selecteditem" (deleteItem) = 'onDeleteItem($event)'></shopping-list-item>
    </section>`,
    styleUrls:['./css/shoppinglist.css'],
    providers:[ShoppingListService]

})

export class ShoppingListComponent implements OnInit{
    listitem : Array<{name:string,amount:number}>;
    selecteditem:{name:string,amount:number};
    constructor(private _shoplist:ShoppingListService){

    } 
    ngOnInit(){
        this.listitem = this._shoplist.getItems();
    }

    onSelect(item: {name:string,amount:number}){
        this.selecteditem=item;
    }

    onDeleteItem(){
        this.selecteditem = null;
    }
}