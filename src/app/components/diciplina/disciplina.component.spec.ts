import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiciplinaComponent } from './diciplina.component';

describe('DisciplinaComponent', () => {
  let component: DiciplinaComponent;
  let fixture: ComponentFixture<DiciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiciplinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

