import { faker } from '@faker-js/faker';

import { User } from '../types';
import { createRandomUser, createRandomWorkout } from '../utils';

const numberOfUsers = 10;
const baseMumberOfWorkoutsPerUser = 20;

export const users: User[] = Array.from({ length: numberOfUsers }, (_, i) => createRandomUser(i + 1));

// Iterate through each user and create a random number of workouts for each user

/* DISCLAIMER: Rejection Sampling + Poisson Distribution wasn't used :(

    * It is a well known fact that using Poisson Distribution is a good way to simulate a random number of events in a given time interval.
    * The average number of events in a given time interval is lambda.
    * The probability of observing k events in a given time interval is given by the Poisson distribution formula:
    * P(k events in interval) = (lambda^k * e^-lambda) / k!
    * But this could be a bit complicated to implement, so we will use a simpler, direct approach.
    * After you find the probability of observing k events in a given time interval, 
    * We can use Rejection Sampling to generate a random number of events based on the probabilities.
    * 
*/

users.forEach((user) => {
    const numberOfWorkouts = faker.number.int({ min: 1, max: 2 * baseMumberOfWorkoutsPerUser });
    user.workouts = Array.from({ length: numberOfWorkouts }, (_, i) => createRandomWorkout(i + 1));
}
);
