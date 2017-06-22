import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiariesSelectComponent } from './diaries-select.component';

describe('DiariesSelectComponent', () => {
  let component: DiariesSelectComponent;
  let fixture: ComponentFixture<DiariesSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiariesSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiariesSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
