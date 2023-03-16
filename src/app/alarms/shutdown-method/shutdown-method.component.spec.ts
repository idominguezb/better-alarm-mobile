import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShutdownMethodComponent } from './shutdown-method.component';

describe('ShutdownMethodComponent', () => {
  let component: ShutdownMethodComponent;
  let fixture: ComponentFixture<ShutdownMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShutdownMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShutdownMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
