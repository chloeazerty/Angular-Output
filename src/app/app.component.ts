import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-output';

  onomatopoeias: string [] = [];

  onReceiveNewOnomatopia(newOnomatopia:string): void {
    console.log(newOnomatopia)
  }
}
