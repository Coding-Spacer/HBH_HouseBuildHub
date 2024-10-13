import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectsSubmenuHeaderGlobalComponent } from './architects-submenu-header-global.component';

describe('ArchitectsSubmenuHeaderGlobalComponent', () => {
  let component: ArchitectsSubmenuHeaderGlobalComponent;
  let fixture: ComponentFixture<ArchitectsSubmenuHeaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitectsSubmenuHeaderGlobalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchitectsSubmenuHeaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
