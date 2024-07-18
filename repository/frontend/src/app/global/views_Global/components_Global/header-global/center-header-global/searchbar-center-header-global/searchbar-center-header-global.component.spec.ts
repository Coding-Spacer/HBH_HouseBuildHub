import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarCenterHeaderGlobalComponent } from './searchbar-center-header-global.component';

describe('SearchbarCenterHeaderGlobalComponent', () => {
  let component: SearchbarCenterHeaderGlobalComponent;
  let fixture: ComponentFixture<SearchbarCenterHeaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchbarCenterHeaderGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchbarCenterHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
