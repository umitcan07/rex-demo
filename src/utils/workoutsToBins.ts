import { Bins } from '@visx/mock-data/lib/generators/genBins';
import moment from 'moment';

import { Workout } from '../types';
import { getWeekDifference } from './heatmapHelpers';



export const numberOfWeeksToDisplay = 13;

export const workoutsToBins = (workouts: Workout[]): Bins[] => {

    const bins: Bins[] = [
        {
            bin: 0,
            bins: [
                { bin: 0, count: 0 },
                { bin: 1, count: 0 },
                { bin: 2, count: 0 },
                { bin: 3, count: 0 },
                { bin: 4, count: 0 },
                { bin: 5, count: 0 },
                { bin: 6, count: 0 }
            ],
        },
        {
            bin: 1,
            bins: [
                { bin: 0, count: 0 },
                { bin: 1, count: 0 },
                { bin: 2, count: 0 },
                { bin: 3, count: 0 },
                { bin: 4, count: 0 },
                { bin: 5, count: 0 },
                { bin: 6, count: 0 }
            ],
        },
        {
            bin: 2,
            bins: [
                { bin: 0, count: 0 },
                { bin: 1, count: 0 },
                { bin: 2, count: 0 },
                { bin: 3, count: 0 },
                { bin: 4, count: 0 },
                { bin: 5, count: 0 },
                { bin: 6, count: 0 }
            ],
        },
        {
            bin: 3,
            bins: [
                { bin: 0, count: 0 },
                { bin: 1, count: 0 },
                { bin: 2, count: 0 },
                { bin: 3, count: 0 },
                { bin: 4, count: 0 },
                { bin: 5, count: 0 },
                { bin: 6, count: 0 }
            ],
        },
        {
            bin: 4,
            bins: [
                { bin: 0, count: 0 },
                { bin: 1, count: 0 },
                { bin: 2, count: 0 },
                { bin: 3, count: 0 },
                { bin: 4, count: 0 },
                { bin: 5, count: 0 },
                { bin: 6, count: 0 }
            ],
        },
        {
            bin: 5,
            bins: [
                { bin: 0, count: 0 },
                { bin: 1, count: 0 },
                { bin: 2, count: 0 },
                { bin: 3, count: 0 },
                { bin: 4, count: 0 },
                { bin: 5, count: 0 },
                { bin: 6, count: 0 }
            ],
        },
        {
            bin: 6,
            bins: [
                { bin: 0, count: 0 },
                { bin: 1, count: 0 },
                { bin: 2, count: 0 },
                { bin: 3, count: 0 },
                { bin: 4, count: 0 },
                { bin: 5, count: 0 },
                { bin: 6, count: 0 }
            ],
        },
        {
            bin: 7,
            bins: [
                { bin: 0, count: 0 },
                { bin: 1, count: 0 },
                { bin: 2, count: 0 },
                { bin: 3, count: 0 },
                { bin: 4, count: 0 },
                { bin: 5, count: 0 },
                { bin: 6, count: 0 }
            ],
        },
        {
            bin: 8,
            bins: [
                { bin: 0, count: 0 },
                { bin: 1, count: 0 },
                { bin: 2, count: 0 },
                { bin: 3, count: 0 },
                { bin: 4, count: 0 },
                { bin: 5, count: 0 },
                { bin: 6, count: 0 }
            ],
        },
        {
            bin: 9,
            bins: [
                { bin: 0, count: 0 },
                { bin: 1, count: 0 },
                { bin: 2, count: 0 },
                { bin: 3, count: 0 },
                { bin: 4, count: 0 },
                { bin: 5, count: 0 },
                { bin: 6, count: 0 }
            ],
        },
        {
            bin: 10,
            bins: [
                { bin: 0, count: 0 },
                { bin: 1, count: 0 },
                { bin: 2, count: 0 },
                { bin: 3, count: 0 },
                { bin: 4, count: 0 },
                { bin: 5, count: 0 },
                { bin: 6, count: 0 }
            ],
        },
        {
            bin: 11,
            bins: [
                { bin: 0, count: 0 },
                { bin: 1, count: 0 },
                { bin: 2, count: 0 },
                { bin: 3, count: 0 },
                { bin: 4, count: 0 },
                { bin: 5, count: 0 },
                { bin: 6, count: 0 }
            ],
        },
        {
            bin: 12,
            bins: [
                { bin: 0, count: 0 },
                { bin: 1, count: 0 },
                { bin: 2, count: 0 },
                { bin: 3, count: 0 },
                { bin: 4, count: 0 },
                { bin: 5, count: 0 },
                { bin: 6, count: 0 }
            ],
        },
    ];

    workouts.forEach(workout => {
        const weekDifference = getWeekDifference(workout.date);
        const dayOfWeek = moment(workout.date).isoWeekday() - 1;
        bins[weekDifference].bins[dayOfWeek].count += workout.caloriesBurned;
        return bins;
    }
    )
    return bins;
}