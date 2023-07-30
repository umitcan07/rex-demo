import { Stars } from '@mui/icons-material';
import { Avatar, Badge,Box, Divider,Typography  } from '@mui/material';

import { User } from '../../types';
import { isEndOfWeek } from '../../utils';
import { Accomplished,getWeeklyDaysWorkedOut  } from '../../utils/statusHelpers';
import { DayToFeedback } from './DayToFeedback';
import { WeeklyResultLabel } from './WeeklyResultLabel';

type UserDetailsProp = {
    user: User
}

export const UserDetails:React.FC<UserDetailsProp> = ({user}) => { 

    const daysWorked = getWeeklyDaysWorkedOut(user.workouts);

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5, p: 1}}>
        <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} badgeContent={ <Box sx={{bgcolor: 'white', borderRadius: 999, color: '#9747FF'}}><Stars /></Box> }>
            <Avatar sx={{height: 64, width: 64}} alt="Travis Howard" src={user.profileImageUrl} />
        </Badge>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1'}}>
            <Typography variant="h6" component="span"  color="#131520">
                {user.displayName}
            </Typography>
            <Typography variant='body1' component="span" color="#656B7B">
                @{user.username}
            </Typography>
        </Box>
        <Divider sx={{alignSelf: 'stretch'}} />
        <Box display='flex' gap={.75} flexDirection='column' alignItems='center'>
            <WeeklyResultLabel workouts={user.workouts} />
            {isEndOfWeek() ? <DayToFeedback daysWorked={daysWorked as Accomplished} /> : null}
        </Box>

        </Box>
    );
}