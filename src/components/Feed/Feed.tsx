import { Box, Divider } from '@mui/material';

import { Workout } from '../../types';
import { FeedItem } from './FeedItem'

type FeedProps = {
    workouts: Workout[];
};

export const Feed = (props: FeedProps) => {
    const {workouts} = props;
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'stretch', p: 2, maxHeight: 210, overflow: 'auto', gap: 2}}>
            {workouts.length > 0 && workouts.map((workout, index) => {
                // Return for only the workouts that have a date of the current week
                if (workout.date.getDay() !== new Date().getDay()) return null;
                return (
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}} key={index}>
                        <FeedItem workout={workout} />
                        <Divider />
                    </Box>
                );
            })}
        </Box>
    )
}