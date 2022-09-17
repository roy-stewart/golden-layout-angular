import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoldenLayout, LayoutConfig } from "golden-layout";

@Component({
  selector: 'lib-golden-layout',
  templateUrl: './golden-layout.component.html',
  styles: [
  ]
})
export class GoldenLayoutComponent implements AfterViewInit {

  @ViewChild('goldenLayoutRoot') layoutRoot!: ElementRef; 

  private goldenLayout!: GoldenLayout;

  constructor() { }

  ngAfterViewInit(): void {
    this.instantiateLayout();
    this.registerComponents();
    this.loadConfig();
  }

  private instantiateLayout(): void {
    this.goldenLayout = new GoldenLayout(this.layoutRoot.nativeElement);
  }

  private registerComponents(): void {
    // register components
  }

  private loadConfig(): void {
    // load config
    const config: LayoutConfig = {
      root: {
          type: 'row',
          content:[]
      }
    };
    this.goldenLayout.loadLayout(config);
  }

}
