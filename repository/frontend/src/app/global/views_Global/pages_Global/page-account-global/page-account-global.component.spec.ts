import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAccountGlobalComponent } from './page-account-global.component';

describe('PageAccountGlobalComponent', () => {
  let component: PageAccountGlobalComponent;
  let fixture: ComponentFixture<PageAccountGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAccountGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageAccountGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
