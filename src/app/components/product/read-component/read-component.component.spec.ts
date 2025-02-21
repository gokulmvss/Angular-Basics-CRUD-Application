import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadComponentComponent } from './read-component.component';

describe('ReadComponentComponent', () => {
  let component: ReadComponentComponent;
  let fixture: ComponentFixture<ReadComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
