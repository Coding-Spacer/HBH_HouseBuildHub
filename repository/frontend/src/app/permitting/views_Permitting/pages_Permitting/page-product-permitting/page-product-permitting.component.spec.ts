import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductPermittingComponent } from './page-product-permitting.component';

describe('PageProductPermittingComponent', () => {
  let component: PageProductPermittingComponent;
  let fixture: ComponentFixture<PageProductPermittingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageProductPermittingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageProductPermittingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
