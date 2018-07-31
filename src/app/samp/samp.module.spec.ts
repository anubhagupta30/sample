import { SampModule } from './samp.module';

describe('SampModule', () => {
  let sampModule: SampModule;

  beforeEach(() => {
    sampModule = new SampModule();
  });

  it('should create an instance', () => {
    expect(sampModule).toBeTruthy();
  });
});
