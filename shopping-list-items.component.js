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
var ShoppingListItemsComponent = (function () {
    function ShoppingListItemsComponent(_shopList) {
        this._shopList = _shopList;
        this.itemselected = { name: '', amount: 0 };
        this.deleteItem = new core_1.EventEmitter();
    }
    ShoppingListItemsComponent.prototype.onDelete = function () {
        this._shopList.deleteItem(this.itemselected);
        this.deleteItem.emit(null);
    };
    ShoppingListItemsComponent = __decorate([
        core_1.Component({
            selector: 'shopping-list-item',
            template: "\n    <div class=\"input\">\n    <label for=\"item-name\">Name</label>\n    <input type=\"text\" id='item-name'[(ngModel)] = \"itemselected.name\"/>\n    </div>\n    <div class=\"input\" >\n    <label for=\"item-amt\">Amount</label>\n    <input type=\"text\" id='item-amt'[(ngModel)] = \"itemselected.amount\"/>\n    </div>\n    <button class='danger' (click)='onDelete()'>Delete Item</button>",
            styleUrls: ['./css/shoppinglist.css'],
            inputs: ['itemselected'],
            outputs: ['deleteItem']
        }), 
        __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
    ], ShoppingListItemsComponent);
    return ShoppingListItemsComponent;
}());
exports.ShoppingListItemsComponent = ShoppingListItemsComponent;
//# sourceMappingURL=shopping-list-items.component.js.map