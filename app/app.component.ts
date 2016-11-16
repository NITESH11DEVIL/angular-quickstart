import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1>Hello Angular! Oops 2 {{name}}</h1>',
  styles: [`
    h1 {
      color: green;
    }
  `]
})
export class AppComponent { 
    name: string='nitesh';
}
