import { UpperCasePipe } from './upper-case.pipe';

describe('UpperCasePipe', () => {

  it('tranform content properly', () => {
    const pipe = new UpperCasePipe();
    expect(pipe.transform('pranay')==='PRANAY').toBeTruthy();
  });

  it('tranform content error', () => {
    const pipe = new UpperCasePipe();
    expect(pipe.transform('prana')==='PRANAY').toBeFalsy();
  });
});
