import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUnicornModalComponent } from './edit-unicorn.modal.component';

describe('EditUnicornComponent', () => {
  let component: EditUnicornModalComponent;
  let fixture: ComponentFixture<EditUnicornModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUnicornModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUnicornModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
