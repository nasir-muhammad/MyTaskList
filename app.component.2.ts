import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <header>
  <div class='brand'>Shopping List</div>
  </header>
  <div class="main">
  <shopping-list></shopping-list>
  </div>
  `,
  styleUrls:['./css/shoppinglist.css']
})

export class AppComponent  { 

}
