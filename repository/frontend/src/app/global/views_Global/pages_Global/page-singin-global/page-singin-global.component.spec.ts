import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSinginGlobalComponent } from './page-singin-global.component';

describe('PageSinginGlobalComponent', () => {
  let component: PageSinginGlobalComponent;
  let fixture: ComponentFixture<PageSinginGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSinginGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageSinginGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
