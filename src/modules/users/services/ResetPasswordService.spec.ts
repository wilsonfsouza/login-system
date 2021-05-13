import AppError from '../../../shared/errors/AppError';
import ResetPasswordService from '../services/ResetPasswordService';
import FakeUserTokensRespository from '../repositories/fakes/FakeUserTokensRepository';

let createUser: ResetPasswordService;
let fakeUserTokensRepository: FakeUserTokensRespository;

describe('ResetPasswordService', () => {
  beforeEach(() => {
    fakeUserTokensRepository = new FakeUserTokensRespository();
    createUser = new ResetPasswordService(
      fakeUserTokensRepository
    );
  });

  it('should be able to reset the password', async () => {
    // Create a new user
    // get the token
    // Check if generateHash was called
    // reset password
    // get the updated user
  });

})
