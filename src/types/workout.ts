type WorkoutType = 'leg' | 'press' | 'curl'

export type Workout = {
    id: number;
    type: WorkoutType;
    date: Date;
    duration: number;
    caloriesBurned: number;
    intensity: number;
    description?: string;
}
