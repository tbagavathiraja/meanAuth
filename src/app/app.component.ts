import { Component } from '@angular/core';
import { LoginComponent} from './login/login.component';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'app';
}
