import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkbasketViewComponent } from './workbasket-view.component';

describe('WorkbasketViewComponent', () => {
  let component: WorkbasketViewComponent;
  let fixture: ComponentFixture<WorkbasketViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkbasketViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkbasketViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
