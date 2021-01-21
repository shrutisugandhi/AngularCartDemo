import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartquantityComponent } from './cartquantity.component';

describe('CartquantityComponent', () => {
  let component: CartquantityComponent;
  let fixture: ComponentFixture<CartquantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartquantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartquantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
