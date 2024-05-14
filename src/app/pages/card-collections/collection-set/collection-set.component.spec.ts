import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionSetComponent } from './collection-set.component';

describe('CollectionSetComponent', () => {
  let component: CollectionSetComponent;
  let fixture: ComponentFixture<CollectionSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionSetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollectionSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
