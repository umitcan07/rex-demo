export type WorkoutType = 'LEG' | 'PRESS' | 'CURL';

export type Workout = {
    id: number;
    type: WorkoutType;
    date: Date;
    duration: number;
    caloriesBurned: number;
    intensity: number;
    description?: string;
}
