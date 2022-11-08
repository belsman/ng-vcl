import { Component } from '@angular/core';

@Component({
  templateUrl: 'demo.component.html',
})
export class TokenDemoComponent {
  onRemove(token) {
    console.log('onRemove', token);
  }

  onListChange(value) {
    console.log('onListChange', value);
  }

  onInputChange(value) {
    console.log('onInputChange', value);
  }
}
