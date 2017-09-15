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
var ShoppingListComponent = (function () {
    function ShoppingListComponent(_shoplist) {
        this._shoplist = _shoplist;
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        this.listitem = this._shoplist.getItems();
    };
    ShoppingListComponent.prototype.onSelect = function (item) {
        this.selecteditem = item;
    };
    ShoppingListComponent.prototype.onDeleteItem = function () {
        this.selecteditem = null;
    };
    ShoppingListComponent = __decorate([
        core_1.Component({
            selector: 'shopping-list',
            template: "\n    <section>\n    <shopping-list-new-item></shopping-list-new-item>\n    </section>\n    <section>\n    <h3>My List</h3>\n    Fiter:\n    <input type=\"text\" #addedvalue (keyup)='0'/>\n    <div class=\"list\">\n    <ul>\n        <li *ngFor=\"let items of listitem | myFilter:addedvalue.value\" (click)=\"onSelect(items)\" >{{items.name}} ({{items.amount}}) </li>\n    </ul>\n    </div>\n    </section>\n    <section *ngIf = \"selecteditem != null\">\n    <shopping-list-item [itemselected] = \"selecteditem\" (deleteItem) = 'onDeleteItem($event)'></shopping-list-item>\n    </section>",
            styleUrls: ['./css/shoppinglist.css'],
            providers: [shopping_list_service_1.ShoppingListService]
        }), 
        __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());
exports.ShoppingListComponent = ShoppingListComponent;
//# sourceMappingURL=shopping-list.component.js.map