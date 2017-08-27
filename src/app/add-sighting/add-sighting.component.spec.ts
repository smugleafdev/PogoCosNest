import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLocationComponent } from './add-sighting.component'; // change to AddPokemon

describe('AddLocationComponent', () => {
  let component: AddLocationComponent;
  let fixture: ComponentFixture<AddLocationComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AddLocationComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
