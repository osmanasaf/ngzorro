import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdayProfileComponent } from './aday-profile.component';

describe('AdayProfileComponent', () => {
  let component: AdayProfileComponent;
  let fixture: ComponentFixture<AdayProfileComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdayProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdayProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
