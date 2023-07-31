import { Box, Typography } from '@mui/material';
import moment from 'moment';

import { Workout } from '../../types/workout';
import { workoutTypeToColors } from '../../utils/workoutTypeToColors';
import { FeedItemIcon } from './FeedItemIcon';

export type FeedItemProps = {
    workout: Workout;
};

export const FeedItem:React.FC<FeedItemProps> = ({ workout }) => {
    const workoutTypeColors = workoutTypeToColors[workout.type];
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2, p: 1 }}>
            <Box sx={{ p: 1, bgcolor: workoutTypeColors[0], color:  workoutTypeColors[1], display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                <FeedItemIcon workoutType={workout.type}/>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column',  gap: 0.5 }}>
                <Typography variant="body2" color="#455A64">
                    {workout.type}
                </Typography>
                <Typography variant="body2" color="#263238">
                    {workout.caloriesBurned} cal - {moment(workout.date).format('MMMM Do YYYY, h:mm:ss a')} 
                </Typography>
            </Box>
        </Box>
    );
}