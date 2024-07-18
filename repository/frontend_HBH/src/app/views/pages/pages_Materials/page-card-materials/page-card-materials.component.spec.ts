import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCardMaterialsComponent } from './page-card-materials.component';

describe('PageCardMaterialsComponent', () => {
  let component: PageCardMaterialsComponent;
  let fixture: ComponentFixture<PageCardMaterialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCardMaterialsComponent]
    });
    fixture = TestBed.createComponent(PageCardMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
