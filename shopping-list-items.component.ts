import { Component,EventEmitter } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';

@Component({
    selector: 'shopping-list-item',
    template: `
    <div class="input">
    <label for="item-name">Name</label>
    <input type="text" id='item-name'[(ngModel)] = "itemselected.name"/>
    </div>
    <div class="input" >
    <label for="item-amt">Amount</label>
    <input type="text" id='item-amt'[(ngModel)] = "itemselected.amount"/>
    </div>
    <button class='danger' (click)='onDelete()'>Delete Item</button>`,
    styleUrls: ['./css/shoppinglist.css'],
    inputs:['itemselected'],
    outputs:['deleteItem']
})
export class ShoppingListItemsComponent {
    constructor(private _shopList:ShoppingListService) { }
    itemselected = {name: '',amount: 0};
    deleteItem = new EventEmitter<{name:string,amount:number}>();

    onDelete(){
        this._shopList.deleteItem(this.itemselected)
        this.deleteItem.emit(null);
    }
}