import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdModalBasicComponent } from './ngbd-modal-basic.component';

describe('NgbdModalBasicComponent', () => {
  let component: NgbdModalBasicComponent;
  let fixture: ComponentFixture<NgbdModalBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbdModalBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgbdModalBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
