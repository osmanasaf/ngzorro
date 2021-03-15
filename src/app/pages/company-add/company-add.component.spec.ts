import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyAddComponent } from './company-add.component';

describe('CompanyAddComponent', () => {
  let component: CompanyAddComponent;
  let fixture: ComponentFixture<CompanyAddComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
