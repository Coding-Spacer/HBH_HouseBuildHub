import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMainMaterialsComponent } from './page-main-materials.component';

describe('PageMainMaterialsComponent', () => {
  let component: PageMainMaterialsComponent;
  let fixture: ComponentFixture<PageMainMaterialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageMainMaterialsComponent]
    });
    fixture = TestBed.createComponent(PageMainMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
