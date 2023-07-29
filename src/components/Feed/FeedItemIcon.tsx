import { AirlineSeatFlat, FitnessCenter, SportsGymnastics } from '@mui/icons-material';

import { WorkoutType } from '../../types/workout';
import { notReachable } from '../../utils';


type FeedItemIconProps = {
    workoutType: WorkoutType;
};

export const FeedItemIcon = (props: FeedItemIconProps) => {
    const { workoutType } = props;
    switch (workoutType) {
        case 'LEG':
            return <AirlineSeatFlat />;
        case 'PRESS':
            return <SportsGymnastics />;
        case 'CURL':
            return <FitnessCenter />;
        default:
            return notReachable(workoutType);
    }
}
