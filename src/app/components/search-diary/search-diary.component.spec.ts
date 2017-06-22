import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDiaryComponent } from './search-diary.component';

describe('SearchDiaryComponent', () => {
  let component: SearchDiaryComponent;
  let fixture: ComponentFixture<SearchDiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
