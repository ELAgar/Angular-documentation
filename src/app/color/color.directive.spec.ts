import {ColorDirective} from './color.directive';

describe('ColorDirective', () => {

  let directive: ColorDirective;


  beforeEach(() => {
    directive = new ColorDirective();
  });


  it('should create instance', () => {
    expect(directive).toBeTruthy();
  });


  it('should change color to red after click on element', () => {
    directive.onClick();
    expect(directive.color).toBe('red');
  });
});
