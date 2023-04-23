import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatVsBankComponent } from './flat-vs-bank.component';

describe('FlatVsBankComponent', () => {
  let component: FlatVsBankComponent;
  let fixture: ComponentFixture<FlatVsBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatVsBankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlatVsBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
