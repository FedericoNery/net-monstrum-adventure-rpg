import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { SignInInput, SignInOutput, User } from 'src/schemas/auth.schema';
import { AuthService } from 'src/auth/auth.service';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => SignInOutput)
  async signIn(@Args('signInInput') signInInput: SignInInput) {
    const { username, password } = signInInput;
    return this.authService.signIn(username, password);
  }
}
