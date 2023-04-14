import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeslizarComponent } from './deslizar.component';

describe('DeslizarComponent', () => {
  let component: DeslizarComponent;
  let fixture: ComponentFixture<DeslizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeslizarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeslizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
