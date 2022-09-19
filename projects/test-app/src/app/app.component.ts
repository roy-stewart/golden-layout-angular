import { Component } from '@angular/core';
import { LayoutConfig } from 'projects/golden-layout-angular/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  exampleConfig: LayoutConfig = {
    root: {
        type: 'row',
        content:[
          {
            type: "component",
            componentType: "simpleText",
          }
        ]
    }
  };
}
