import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WonderWorldComponent } from './wonder-world.component';

describe('WonderWorldComponent', () => {
  let component: WonderWorldComponent;
  let fixture: ComponentFixture<WonderWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WonderWorldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WonderWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
