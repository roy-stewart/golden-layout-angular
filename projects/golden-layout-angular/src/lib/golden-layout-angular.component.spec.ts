import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldenLayoutAngularComponent } from './golden-layout-angular.component';

describe('GoldenLayoutAngularComponent', () => {
  let component: GoldenLayoutAngularComponent;
  let fixture: ComponentFixture<GoldenLayoutAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoldenLayoutAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldenLayoutAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
