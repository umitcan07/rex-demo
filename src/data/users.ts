import { faker } from '@faker-js/faker';

import { User } from '../types';
import { createRandomUser, createRandomWorkout } from '../utils';

const numberOfUsers = 10;
const baseMumberOfWorkoutsPerUser = 20;

export const users: User[] = Array.from({ length: numberOfUsers }, (_, i) => createRandomUser(i + 1));

// Iterate through each user and create a random number of workouts for each user

users.forEach((user) => {
    const numberOfWorkouts = faker.datatype.number({ min: 1, max: 2 * baseMumberOfWorkoutsPerUser });
    user.workouts = Array.from({ length: numberOfWorkouts }, (_, i) => createRandomWorkout(i + 1));
}
);

// export { users };


