import { Box, Divider } from '@mui/material';

import { Workout } from '../../types';
import { getWorkoutsOfTheWeek } from '../../utils';
import { FeedItem } from './FeedItem'

type FeedProps = {
    workouts: Workout[];
};

export const Feed:React.FC<FeedProps> = ({workouts}) => {
    const workoutsThisWeek = getWorkoutsOfTheWeek(workouts);
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'stretch', p: 2, maxHeight: 210, overflow: 'auto', gap: 2}}>
            {workoutsThisWeek.length > 0 && workoutsThisWeek.map((workout, index) => {
                // Return for only the workouts that have a date of the current week
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