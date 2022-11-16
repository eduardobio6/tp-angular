import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitadorComponent } from './limitador.component';

describe('LimitadorComponent', () => {
  let component: LimitadorComponent;
  let fixture: ComponentFixture<LimitadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LimitadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});