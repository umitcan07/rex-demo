import { faker } from '@faker-js/faker';

import { User, Workout } from '../types';

export const createRandomUser = (id: number): User => {

    // Create primitices
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    const username = faker.internet.userName(firstName, lastName);
    const displayName = `${firstName} ${lastName}`;
    const age = faker.number.int({ min: 18, max: 65 });
    const email = faker.internet.email(firstName, lastName) as Email;
    const weight = faker.number.int({ min: 40, max: 120 });
    const height = faker.number.int({ min: 120, max: 220 });
    const profileImageUrl = faker.image.avatar();

    return {
        id,
        username,
        displayName,
        age,
        email,
        weight,
        height,
        profileImageUrl
    }

}

export const createRandomWorkout = (id: number): Workout => {
    return {
        id: id,
        type: faker.helpers.arrayElement(['LEG', 'PRESS', 'CURL']),
        date: faker.date.between('2023-07-01', '2023-08-31'),
        duration: faker.number.int({ min: 30, max: 60 }),
        caloriesBurned: faker.number.int({ min: 50, max: 300 }),
        intensity: faker.number.int({ min: 1, max: 10 }),
        description: faker.lorem.sentence()
    }
}