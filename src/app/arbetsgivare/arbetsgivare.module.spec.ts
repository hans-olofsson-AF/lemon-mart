import { ArbetsgivareModule } from './arbetsgivare.module';

describe('ArbetsgivareModule', () => {
  let arbetsgivareModule: ArbetsgivareModule;

  beforeEach(() => {
    arbetsgivareModule = new ArbetsgivareModule();
  });

  it('should create an instance', () => {
    expect(arbetsgivareModule).toBeTruthy();
  });
});
