import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CancelledTasksPage } from './cancelled-tasks.page';

describe('CancelledTasksPage', () => {
  let component: CancelledTasksPage;
  let fixture: ComponentFixture<CancelledTasksPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelledTasksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
