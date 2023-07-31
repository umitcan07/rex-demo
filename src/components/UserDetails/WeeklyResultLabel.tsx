import { Box, Typography } from '@mui/material'

import theme from '../../theme'
import { Workout } from '../../types'
import { getWeeklyStreak } from '../../utils'

export type WeeklyResultLabelProps = {
    workouts: Workout[]
}
export const WeeklyResultLabel: React.FC<WeeklyResultLabelProps> = ({ workouts }) => {
    const weeklyStreak = getWeeklyStreak(workouts);
    return (
        <Box display='flex' sx={{ borderRadius: 999, px: 2, py: 0.5, bgcolor: theme.palette.primary.main, color: theme.palette.primary.contrastText }}>
            <Typography variant="h5" component="span" >
                {weeklyStreak}
            </Typography>
        </Box>
    )
}