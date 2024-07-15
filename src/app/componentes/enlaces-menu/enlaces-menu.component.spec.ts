import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlacesMenuComponent } from './enlaces-menu.component';

describe('EnlacesMenuComponent', () => {
  let component: EnlacesMenuComponent;
  let fixture: ComponentFixture<EnlacesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnlacesMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnlacesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
