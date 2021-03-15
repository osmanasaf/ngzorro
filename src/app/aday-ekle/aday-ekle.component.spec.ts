import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdayEkleComponent } from './aday-ekle.component';

describe('AdayEkleComponent', () => {
  let component: AdayEkleComponent;
  let fixture: ComponentFixture<AdayEkleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdayEkleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdayEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
