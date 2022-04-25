import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtentionPannelComponent } from './extention-pannel.component';

describe('ExtentionPannelComponent', () => {
  let component: ExtentionPannelComponent;
  let fixture: ComponentFixture<ExtentionPannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtentionPannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtentionPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
