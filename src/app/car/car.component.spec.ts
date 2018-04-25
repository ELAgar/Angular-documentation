import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CarComponent} from './car.component';
import {CarService} from '../car.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

describe('CarComponent', () => {
  let fixture: ComponentFixture<CarComponent>;
  let component: CarComponent;
  let service: CarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarComponent]
    });
    fixture = TestBed.createComponent(CarComponent);
    component = fixture.debugElement.componentInstance;
    service = fixture.debugElement.injector.get(CarService);
  });


  // Test for Components
  it(`should create component instance`, () => {
    expect(component).toBeTruthy();
  });

  it(`should render h1 tag which title 'My car header'`, () => {
    fixture.detectChanges();
    const nativeEl = fixture.debugElement.nativeElement;
    const text = nativeEl.querySelector('h1').textContent;
    expect(text).toEqual('My car header');
  });


  // Test for Services
  it(`should inject CarService`, () => {
    fixture.detectChanges();
    expect(component.isCarVisible).toEqual(service.getVisibility());
  });

  it('should display car if is visible', () => {
    service.showCar();
    fixture.detectChanges();
    const nativeEl = fixture.debugElement.nativeElement;
    const text = nativeEl.querySelector('span').textContent;
    expect(text).toEqual('Car is visible');
  });

  it(`should't display car if isn't visible`, () => {
    service.hideCar();
    // Запустили метод
    fixture.detectChanges();
    // Проверили изменения
    const nativeEl = fixture.debugElement.nativeElement;
    // Достаём элемент дома
    const text = nativeEl.querySelector('span').textContent;
    // По элементу дома находим нужный элемент
    expect(text).not.toEqual('Car is visible');
    // И сравниваем контент, "если не равняется такому тексту"
  });


  it(`should't get carName if not async`, () => {
    /*
    Шпионим за методом "getCarName" сервиса
    и заменяем возвращаемое значение этого метода на "Test car"
    */
    spyOn(service, 'getCarName')
      .and.returnValue(Observable.of('Test car').delay(100));
    fixture.detectChanges();
    expect(component.carName).toBe(undefined);
  });


  it(`should get carName if async`, async(() => {
    spyOn(service, 'getCarName')
      .and.returnValue(Observable.of('Test car').delay(100));
    fixture.detectChanges();
    // Когда "дела" идут стабильно то следующим выполним
    // коллбэк .then и поменяем исходящие значения
    fixture.whenStable().then(() => {
      expect(component.carName).toEqual('Test car');
    });
  }));

});
