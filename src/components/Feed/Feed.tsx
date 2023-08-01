import { DirectionsRun } from '@mui/icons-material';
import { Box, Divider } from '@mui/material';

import { Workout } from '../../types';
import { getWorkoutsOfTheWeek } from '../../utils';
import { FeedItem } from './FeedItem'

type FeedProps = {
    workouts: Workout[];
};

const FeedEmptyState: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', flex: 1 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5 }}>
                <DirectionsRun sx={{ fontSize: '2.5rem', color: '#C3C6D0' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: .5 }}>
                    <Box sx={{ fontSize: 'h6.fontSize', fontWeight: 'normal' }}>No workouts this week</Box>
                    <Box sx={{ fontSize: 'body2.fontSize', fontWeight: 'regular' }}>Start adding workouts to see them here</Box>
                </Box>
            </Box>
        </Box>
    );
}

export const Feed:React.FC<FeedProps> = ({ workouts }) => {
    const workoutsThisWeek = getWorkoutsOfTheWeek(workouts);
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', p: 2, overflow: 'auto', gap: 2, height: '100%   ', flex: 1 }}>
            {workoutsThisWeek.length > 0 ? workoutsThisWeek.map((workout, index) => {
                return (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }} key={index}>
                        <FeedItem workout={workout} />
                        <Divider />
                    </Box>
                );
            } ): <FeedEmptyState />}
        </Box>
    )
}