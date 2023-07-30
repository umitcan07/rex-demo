import { Email } from './email';
import { Workout } from './workout';

export type User = {
    id: number;
    username: string;
    displayName: string;
    age: number;
    email: Email;
    weight: number;
    height: number;
    profileImageUrl?: string;
    workouts: Workout[];
}