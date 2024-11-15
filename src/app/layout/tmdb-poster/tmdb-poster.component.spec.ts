import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmdbPosterComponent } from './tmdb-poster.component';

describe('TmdbPosterComponent', () => {
  let component: TmdbPosterComponent;
  let fixture: ComponentFixture<TmdbPosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TmdbPosterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TmdbPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
