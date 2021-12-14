import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFavorieComponent } from './list-favorie.component';

describe('ListFavorieComponent', () => {
  let component: ListFavorieComponent;
  let fixture: ComponentFixture<ListFavorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFavorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFavorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
