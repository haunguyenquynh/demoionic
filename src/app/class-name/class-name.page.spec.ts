import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassNamePage } from './class-name.page';

describe('ClassNamePage', () => {
  let component: ClassNamePage;
  let fixture: ComponentFixture<ClassNamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassNamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassNamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
