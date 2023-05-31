import { BarbersModule } from './barbers.module';

describe('BarbersModule', () => {
  let barbersModule: BarbersModule;

  beforeEach(() => {
    barbersModule = new BarbersModule();
  });

  it('should create an instance', () => {
    expect(barbersModule).toBeTruthy();
  });
});
