import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTopHeaderGlobalComponent } from './search-top-header-global.component';

describe('SearchTopHeaderGlobalComponent', () => {
  let component: SearchTopHeaderGlobalComponent;
  let fixture: ComponentFixture<SearchTopHeaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchTopHeaderGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchTopHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
