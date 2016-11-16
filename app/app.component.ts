import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1>This is just the beginning {{name}}</h1>',
  styles: [`
  red{
    color:red;
  }
    h1 {
      color: blue;
      font-family: Arial, Helvetica, sans-serif;
    }
`]
})
export class AppComponent { 
    name: string='Man';
    
}
