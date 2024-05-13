import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCollectionsComponent } from './card-collections.component';

describe('CardCollectionsComponent', () => {
  let component: CardCollectionsComponent;
  let fixture: ComponentFixture<CardCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCollectionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
