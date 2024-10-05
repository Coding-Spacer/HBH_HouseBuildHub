import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePlatformanalyticGlobalComponent } from './page-platformanalytic-global.component';

describe('PagePlatformanalyticGlobalComponent', () => {
  let component: PagePlatformanalyticGlobalComponent;
  let fixture: ComponentFixture<PagePlatformanalyticGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePlatformanalyticGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagePlatformanalyticGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
