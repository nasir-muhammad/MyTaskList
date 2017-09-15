import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
 
import { AppComponent }  from './app.component';
//import { ShoppingListComponent }  from './ShoppingList/shopping-list.component';
//import { ShoppingListNewItemComponent } from './ShoppingList/shopping-list-new-item.component';
//import { ShoppingListItemsComponent } from './ShoppingList/shopping-list-items.component';
//import { FilterPipe } from './ShoppingList/filer.pipe';
@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  //declarations: [ AppComponent,ShoppingListComponent,ShoppingListNewItemComponent,ShoppingListItemsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
