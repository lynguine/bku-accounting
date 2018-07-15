import { AccountFormModule } from './account-form.module';

describe('AccountFormModule', () => {
  let accountFormModule: AccountFormModule;

  beforeEach(() => {
    accountFormModule = new AccountFormModule();
  });

  it('should create an instance', () => {
    expect(accountFormModule).toBeTruthy();
  });
});
