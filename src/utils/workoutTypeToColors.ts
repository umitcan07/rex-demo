import { WorkoutType } from "../types/workout";

import { Color } from "../types";

export const workoutTypeToColors: Record<WorkoutType, [Color, Color]> = {
    LEG: ['#F6EFFF', '#9747FF'],
    PRESS: ['#E5F0F9', '#2196F3'],
    CURL: ['#E8FBF7', '#07A186'],
};