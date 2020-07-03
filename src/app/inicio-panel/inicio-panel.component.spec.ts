import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPanelComponent } from './inicio-panel.component';

describe('InicioPanelComponent', () => {
  let component: InicioPanelComponent;
  let fixture: ComponentFixture<InicioPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
