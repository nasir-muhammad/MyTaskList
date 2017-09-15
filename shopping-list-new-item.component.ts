import { Component,EventEmitter,OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
    selector: 'shopping-list-new-item',
    template: `
    <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
        <div class="input">
            <label for="item-name">Name</label>
            <input formControlName="itemname" type="text" id='item-name' [(ngModel)]="item.name">
        </div>
        <div class="input">
             <label for="item-name">Amount</label>
             <input formControlName="itemamount" type="number" id='item-amt' greaterThenZero [(ngModel)]="item.amount">
        </div>
        <button type='submit' [disabled]="!myForm.valid">Add Item</button>
    </form>
        `,
        styleUrls: ['./css/shoppinglist.css']
})
export class ShoppingListNewItemComponent implements OnInit {
    item  ={name:'',amount:0};
    myForm:FormGroup;

    constructor(private _shoplist:ShoppingListService,private _buildform:FormBuilder){
        
    }

    ngOnInit(){
        this.myForm = this._buildform.group({
            'itemname':["",Validators.required],
            'itemamount':["",[Validators.required,this.greaterThenZero]]
        })

    }

    onSubmit(){
        this._shoplist.insertItem({name:this.item.name,amount:this.item.amount});
    }

    greaterThenZero(control:FormControl):{[s:string]:boolean}{
        if(control.value <= 0){
            return {notenough: true};
        }
        return null;
    }

 }
