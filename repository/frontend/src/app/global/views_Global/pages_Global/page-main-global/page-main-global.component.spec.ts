import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMainGlobalComponent } from './page-main-global.component';

describe('PageMainGlobalComponent', () => {
  let component: PageMainGlobalComponent;
  let fixture: ComponentFixture<PageMainGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMainGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageMainGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
