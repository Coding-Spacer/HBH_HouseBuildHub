import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotfoundGlobalComponent } from './page-notfound-global.component';

describe('PageNotfoundGlobalComponent', () => {
  let component: PageNotfoundGlobalComponent;
  let fixture: ComponentFixture<PageNotfoundGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNotfoundGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageNotfoundGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
