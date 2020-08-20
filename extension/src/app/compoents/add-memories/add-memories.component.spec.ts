import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMemoriesComponent } from './add-memories.component';

describe('AddMemoriesComponent', () => {
  let component: AddMemoriesComponent;
  let fixture: ComponentFixture<AddMemoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMemoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMemoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
