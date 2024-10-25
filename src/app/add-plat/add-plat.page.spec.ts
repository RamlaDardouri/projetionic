import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPlatPage } from './add-plat.page';

describe('AddPlatPage', () => {
  let component: AddPlatPage;
  let fixture: ComponentFixture<AddPlatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
