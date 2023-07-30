import { faker } from '@faker-js/faker';

import { Email, User, Workout } from '../types';

/** 
     * 0 -> 119 (Maribel Langworth)
     * 1 -> 127 (Samson Gislason)
     * 2 -> 103 (Caleb Farrell)
     * 3 -> 107 (Darrell Barton)
     * 4 -> 100 (Jose Marks)
     * 5 -> [COULDNT FIND ANY!]
     * 6 -> 102 (Hollis Daniel)
     * 7 -> [COULDNT FIND ANY!]
*/

const seedOffset = 193;

export const createRandomUser = (id: number): User => {

    faker.seed(id + seedOffset);

    // Create primitices
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    const username = faker.internet.userName({ firstName, lastName });
    const displayName = `${firstName} ${lastName}`;
    const age = faker.number.int({ min: 18, max: 65 });
    const email = faker.internet.email({ firstName, lastName }) as Email;
    const weight = faker.number.int({ min: 40, max: 120 });
    const height = faker.number.int({ min: 120, max: 220 });
    const profileImageUrl = faker.image.avatar();
    const workouts: Workout[] = [];

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
    faker.seed(id + seedOffset);
    return {
        id: id,
        type: faker.helpers.arrayElement(['LEG', 'PRESS', 'CURL']),
        date: faker.date.between({ from: '2023-06-01', to: '2023-07-30' }),
        duration: faker.number.int({ min: 5, max: 60 }),
        caloriesBurned: faker.number.int({ min: 30, max: 314 }),
        intensity: faker.number.int({ min: 1, max: 10 }),
        description: faker.lorem.sentence()
    }
}