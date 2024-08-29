import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductBuildersComponent } from './page-product-builders.component';

describe('PageProductBuildersComponent', () => {
  let component: PageProductBuildersComponent;
  let fixture: ComponentFixture<PageProductBuildersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageProductBuildersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageProductBuildersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
