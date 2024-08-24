import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonGroupComponent } from './boton-group.component';

describe('BotonGroupComponent', () => {
  let component: BotonGroupComponent;
  let fixture: ComponentFixture<BotonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
