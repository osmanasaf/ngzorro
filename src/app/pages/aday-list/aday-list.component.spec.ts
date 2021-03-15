import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdayListComponent } from './aday-list.component';

describe('AdayListComponent', () => {
  let component: AdayListComponent;
  let fixture: ComponentFixture<AdayListComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdayListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
