import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatePlatPage } from './update-plat.page';

describe('UpdatePlatPage', () => {
  let component: UpdatePlatPage;
  let fixture: ComponentFixture<UpdatePlatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePlatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
