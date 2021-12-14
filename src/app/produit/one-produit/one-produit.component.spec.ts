import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneProduitComponent } from './one-produit.component';

describe('OneProduitComponent', () => {
  let component: OneProduitComponent;
  let fixture: ComponentFixture<OneProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
