import { WorkoutType } from "../types/workout";

type HexadecimalColor = `#${string}`;

export const workoutTypeToColors: Record<WorkoutType, [HexadecimalColor, HexadecimalColor]> = {
    LEG: ['#F6EFFF', '#9747FF'],
    PRESS: ['#E5F0F9', '#2196F3'],
    CURL: ['#E8FBF7', '#07A186'],
};