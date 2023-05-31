import { BarberModule } from './barber.module';

describe('BarberModule', () => {
  let barberModule: BarberModule;

  beforeEach(() => {
    barberModule = new BarberModule();
  });

  it('should create an instance', () => {
    expect(barberModule).toBeTruthy();
  });
});
