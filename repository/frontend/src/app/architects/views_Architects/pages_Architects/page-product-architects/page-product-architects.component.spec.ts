import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductArchitectsComponent } from './page-product-architects.component';

describe('PageProductArchitectsComponent', () => {
  let component: PageProductArchitectsComponent;
  let fixture: ComponentFixture<PageProductArchitectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageProductArchitectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageProductArchitectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
