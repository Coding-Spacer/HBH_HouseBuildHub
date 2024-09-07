import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreateaccountGlobalComponent } from './page-createaccount-global.component';

describe('PageCreateaccountGlobalComponent', () => {
  let component: PageCreateaccountGlobalComponent;
  let fixture: ComponentFixture<PageCreateaccountGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCreateaccountGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageCreateaccountGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
