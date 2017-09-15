import { Injectable } from '@angular/core';
import { shopping_list } from './mock.component';

@Injectable()
export class ShoppingListService {
    constructor() { }
    getItems(){
        return shopping_list;
    }
    insertItem(item:{name:string,amount:number}){
        shopping_list.push(item);
    }
    deleteItem(item:{name:string,amount:number}){
        shopping_list.splice(shopping_list.indexOf(item),1);
    }

}