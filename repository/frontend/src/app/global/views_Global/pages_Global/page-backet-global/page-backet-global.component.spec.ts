import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBacketGlobalComponent } from './page-backet-global.component';

describe('PageBacketGlobalComponent', () => {
  let component: PageBacketGlobalComponent;
  let fixture: ComponentFixture<PageBacketGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBacketGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageBacketGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
