import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOpenHeaderComponent } from './card-open-header.component';

describe('CardOpenHeaderComponent', () => {
  let component: CardOpenHeaderComponent;
  let fixture: ComponentFixture<CardOpenHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardOpenHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardOpenHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
