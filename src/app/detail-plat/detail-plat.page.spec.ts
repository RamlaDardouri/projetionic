import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailPlatPage } from './detail-plat.page';

describe('DetailPlatPage', () => {
  let component: DetailPlatPage;
  let fixture: ComponentFixture<DetailPlatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPlatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
