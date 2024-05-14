import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardManaComponent } from './card-mana.component';

describe('CardManaComponent', () => {
  let component: CardManaComponent;
  let fixture: ComponentFixture<CardManaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardManaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardManaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
