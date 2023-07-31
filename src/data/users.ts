import { User } from '../types';
import { createRandomUsers, numberOfUsersInDatabase } from '../utils/dataGenerators';

export const users: User[] = createRandomUsers(numberOfUsersInDatabase);