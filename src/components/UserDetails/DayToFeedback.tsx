import { Box } from '@mui/material';
import moment from 'moment';
import React, { useMemo } from 'react';

import { notReachable } from '../../utils';
import { Accomplished, Total  } from '../../utils/statusHelpers';

export type DayToEmojiProps = {
    daysWorked: Accomplished;
};


export const DayToFeedback: React.FC<DayToEmojiProps> = ({ daysWorked }) => {

    const todayAsNumber = moment().isoWeekday();
    const emoji = useMemo(() => {
        switch (daysWorked) {
            case 0:
                return '😬';
            case 1:
                return '😬';
            case 2:
                return '🙁';
            case 3:
                return '😐';
            case 4:
                return '🙂';
            case 5:
                return '😄';
            case 6:
                return '😄';
            case 7:
                return '👑';
            default:
                return notReachable(daysWorked);
        }
    }, [daysWorked]);

    const feedback = useMemo(() => {
        switch (daysWorked) {
            case 0:
                return 'Oops, seems like you got too busy this week';
            case 1:
                return 'You are being lazy this week';
            case 2:
                return 'You can do better than this, come on!';
            case 3:
                return 'You have cooked three times this week!';
            case 4:
                return 'You have cooked four times this week!';
            case 5:
                return 'Inspiring result!';
            case 6:
                return 'You have done it. Great Job!';
            case 7:
                return 'Pure insanity by you!';
            default:
                return notReachable(daysWorked);
        }
    }, [daysWorked]);

    switch (todayAsNumber as Total) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return null;
        case 6:
        case 7:
            return ( <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1, p: 2 }}> 
            {emoji} {feedback}
            </Box> )
        default:
            return null;
    }

            

}