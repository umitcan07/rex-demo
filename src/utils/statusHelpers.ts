import moment from 'moment';

import { Workout } from '../types';


export type Accomplished = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type Total = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type WeeklyStreakString = `${Accomplished}/${Total}`;

export const isEndOfWeek = (): boolean => {
    // We need this to know when to show an emoji based on the this weeks streak.
    const now = moment();
    return now.isoWeekday() === 7; // 1 is Monday and 7 is Sunday in Moment.js
}

export const isWorkoutThisWeek = (workout: Workout): boolean => {
    const now = moment();
    const startOfWeek = now.clone().startOf('isoWeek');
    const endOfWeek = now.clone().endOf('isoWeek');
    const workoutDate = moment(workout.date);
    return workoutDate.isSameOrAfter(startOfWeek) && workoutDate.isSameOrBefore(endOfWeek);
}

export const getWorkoutsOfTheWeek = (workouts: Workout[]): Workout[] => {
    return workouts.filter(isWorkoutThisWeek);
}

export const getWeeklyDaysWorkedOut = (workouts: Workout[]): number => {
    return getWorkoutsOfTheWeek(workouts).length;
}

export const getWeeklyStreak = (workouts: Workout[]): WeeklyStreakString => {
    // Ex: '3/6' means this week we did 3 workouts out of 6 days as today is the 6th day of the week)
    const thisWeekWorkouts = getWorkoutsOfTheWeek(workouts);
    const now = moment();
    const accomplished = thisWeekWorkouts.length as Accomplished;
    const total = now.isoWeekday() as Total; // it's from 1 (Monday) to 7 (Sunday)
    return `${accomplished}/${total}`;
}