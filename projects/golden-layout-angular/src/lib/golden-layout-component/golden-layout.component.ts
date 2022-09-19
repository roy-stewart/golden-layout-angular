import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { GoldenLayout, LayoutConfig } from "golden-layout";

@Component({
  selector: 'lib-golden-layout',
  templateUrl: './golden-layout.component.html',
  styles: [
  ]
})
export class GoldenLayoutComponent implements AfterViewInit {

  @Input() config!: LayoutConfig;

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
    this.goldenLayout.registerComponentFactoryFunction("simpleText", () => {
      const el = document.createElement("p");
      el.textContent = "simple text";
      return el;
    });
  }

  private loadConfig(): void {
    this.goldenLayout.loadLayout(this.config);
  }

}
