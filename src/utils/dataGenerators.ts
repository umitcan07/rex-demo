import { faker } from '@faker-js/faker';

import { Email, User, Workout } from '../types';
import { poisson } from './poisson';
import { sortByDate } from './sortByDate';

const avgNumberOfWorkouts = 120; // For now it is based on 120 days
const seedOffset = 21;

export const numberOfUsersInDatabase = 50;

export const createRandomUser = (id: number): User => {

    faker.seed(id + seedOffset);

    // Create primitices
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    // Create derived values
    const username = faker.internet.userName({ firstName, lastName });
    const displayName = `${firstName} ${lastName}`;
    const age = faker.number.int({ min: 18, max: 65 });
    const email = faker.internet.email({ firstName, lastName }) as Email;
    const weight = faker.number.int({ min: 40, max: 120 });
    const height = faker.number.int({ min: 120, max: 220 });
    const profileImageUrl = faker.image.avatar();
    const workouts: Workout[] = sortByDate(createRandomWorkouts(poisson(avgNumberOfWorkouts))) as Workout[];

    return {
        id,
        username,
        displayName,
        age,
        email,
        weight,
        height,
        profileImageUrl,
        workouts
    }

}

export const createRandomWorkout = (id: number): Workout => {

    // faker.seed(id + seedOffset);

    return {
        id: id,
        type: faker.helpers.arrayElement(['LEG', 'PRESS', 'CURL']),
        date: faker.date.recent({ days: 120 }),
        duration: faker.number.int({ min: 5, max: 60 }),
        caloriesBurned: faker.number.int({ min: 30, max: 314 }),
        intensity: faker.number.int({ min: 1, max: 10 }),
        description: faker.lorem.sentence()
    }
}

export const createRandomUsers = (amount: number): User[] => {
    const users: User[] = [];
    for (let i = 0; i < amount; i++) {
        users.push(createRandomUser(i));
    }
    return users;
}

export const createRandomWorkouts = (amount: number): Workout[] => {
    const workouts: Workout[] = [];
    for (let i = 0; i < amount; i++) {
        workouts.push(createRandomWorkout(i));
    }
    return workouts;
}

