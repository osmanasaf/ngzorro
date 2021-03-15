import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { KontakAddComponent } from './kontak-add.component';

describe('KontakAddComponent', () => {
  let component: KontakAddComponent;
  let fixture: ComponentFixture<KontakAddComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KontakAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KontakAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
