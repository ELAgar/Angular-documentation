import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CarComponent} from './car.component';
import {CarService} from '../car.service';

describe('CarComponent', () => {
  let fixture: ComponentFixture<CarComponent>;
  let component: CarComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarComponent]
    });
    fixture = TestBed.createComponent(CarComponent);
    component = fixture.debugElement.componentInstance;
  });

  it(`should create component instance`, () => {
    expect(component).toBeTruthy();
  });

  it(`should render h1 tag which title 'My car header'`, () => {
    fixture.detectChanges();
    const nativeEl = fixture.debugElement.nativeElement;
    const text = nativeEl.querySelector('h1').textContent;
    expect(text).toEqual('My car header');
  });

  it(`should inject CarService`, () => {
    const service = fixture.debugElement.injector.get(CarService);
    fixture.detectChanges();
    expect(component.isCarVisible).toEqual(service.getVisibility());
  });

});
