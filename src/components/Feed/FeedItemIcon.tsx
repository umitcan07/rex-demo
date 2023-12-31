import { AirlineSeatReclineExtra, FitnessCenter, SportsGymnastics } from '@mui/icons-material';

import { WorkoutType } from '../../types/workout';
import { notReachable } from '../../utils';


type FeedItemIconProps = {
    workoutType: WorkoutType;
};

export const FeedItemIcon:React.FC<FeedItemIconProps> = (props) => {
    const { workoutType } = props;
    switch (workoutType) {
        case 'LEG':
            return <AirlineSeatReclineExtra />;
        case 'PRESS':
            return <SportsGymnastics />;
        case 'CURL':
            return <FitnessCenter />;
        default:
            return notReachable(workoutType);
    }
}
