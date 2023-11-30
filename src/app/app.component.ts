import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  username: string = 'Juanito';

  persona = {
    username: 'Juanito',
    edad: 18,
    coords: {
      lat: 10,
      lng: -10,
    },
  };

  constructor() {}
}

