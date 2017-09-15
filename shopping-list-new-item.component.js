"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var shopping_list_service_1 = require('./shopping-list.service');
var forms_1 = require('@angular/forms');
var ShoppingListNewItemComponent = (function () {
    function ShoppingListNewItemComponent(_shoplist, _buildform) {
        this._shoplist = _shoplist;
        this._buildform = _buildform;
        this.item = { name: '', amount: 0 };
    }
    ShoppingListNewItemComponent.prototype.ngOnInit = function () {
        this.myForm = this._buildform.group({
            'itemname': ["", forms_1.Validators.required],
            'itemamount': ["", [forms_1.Validators.required, this.greaterThenZero]]
        });
    };
    ShoppingListNewItemComponent.prototype.onSubmit = function () {
        this._shoplist.insertItem({ name: this.item.name, amount: this.item.amount });
    };
    ShoppingListNewItemComponent.prototype.greaterThenZero = function (control) {
        if (control.value <= 0) {
            return { notenough: true };
        }
        return null;
    };
    ShoppingListNewItemComponent = __decorate([
        core_1.Component({
            selector: 'shopping-list-new-item',
            template: "\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"input\">\n            <label for=\"item-name\">Name</label>\n            <input formControlName=\"itemname\" type=\"text\" id='item-name' [(ngModel)]=\"item.name\">\n        </div>\n        <div class=\"input\">\n             <label for=\"item-name\">Amount</label>\n             <input formControlName=\"itemamount\" type=\"number\" id='item-amt' greaterThenZero [(ngModel)]=\"item.amount\">\n        </div>\n        <button type='submit' [disabled]=\"!myForm.valid\">Add Item</button>\n    </form>\n        ",
            styleUrls: ['./css/shoppinglist.css']
        }), 
        __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService, forms_1.FormBuilder])
    ], ShoppingListNewItemComponent);
    return ShoppingListNewItemComponent;
}());
exports.ShoppingListNewItemComponent = ShoppingListNewItemComponent;
//# sourceMappingURL=shopping-list-new-item.component.js.map