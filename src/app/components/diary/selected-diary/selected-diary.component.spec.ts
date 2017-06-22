import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedDiaryComponent } from './selected-diary.component';

describe('SelectedDiaryComponent', () => {
  let component: SelectedDiaryComponent;
  let fixture: ComponentFixture<SelectedDiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedDiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
