import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldenLayoutComponent } from './golden-layout.component';

describe('GoldenLayoutComponent', () => {
  let component: GoldenLayoutComponent;
  let fixture: ComponentFixture<GoldenLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoldenLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldenLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it.todo('should register all components in golden layout');

  // it.todo('should load the config in golden layout');
});
