import { User } from 'src/domain/user.entity';
import { define } from 'typeorm-seeding';

define(User, (faker) => {
  const gender = faker.random.number(1);
  const firstName = faker.name.firstName(gender);
  const lastName = faker.name.lastName(gender);

  const user = new User();
  user.firstName = firstName;
  user.lastName = lastName;
  user.password = faker.random.word();
  return user;
});
