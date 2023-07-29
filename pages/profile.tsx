import { LocalFireDepartment, MonitorHeart, Person } from '@mui/icons-material';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import * as React from 'react';

import { Feed } from '../src/components/Feed/Feed';
import Example from '../src/components/Heatmap/Heatmap';
import { UserDetails } from '../src/components/UserDetails/UserDetails';
import { userList } from '../src/data/users';
import { User } from '../src/types/user';
import { Workout } from '../src/types/workout';

const user: User = userList[0];
const workouts: Workout[] = [
    // export type Workout = {
// id: number;
// type: 'LEG' | 'PRESS' | 'CURL';
// date: Date;
// duration: number;
// caloriesBurned: number;
// intensity: number;
// description?: string;
// }
    {
        id: 1,
        type: 'LEG',
        date: new Date(),
        duration: 30,
        caloriesBurned: 300,
        intensity: 5,
        description: 'Leg day'
    },
    {
        id: 2,
        type: 'PRESS',
        date: new Date(),
        duration: 30,
        caloriesBurned: 321,
        intensity: 5,
        description: 'Chest day'
    },
    {
        id: 3,
        type: 'CURL',
        date: new Date(),
        duration: 30,
        caloriesBurned: 432,
        intensity: 5,
        description: 'Arm day'
    },  
    {
        id: 4,
        type: 'LEG',
        date: new Date(),
        duration: 30,
        caloriesBurned: 123,
        intensity: 5,
        description: 'Leg day'
    }
]

export default function Profile() {

    return (
        <Container sx={{pt: 8}} maxWidth="md">
            <Grid container spacing={{xs: 3, md: 5}}>
                <Grid item xs={12}>
                    <Paper elevation={2} >
                        <Box display='flex' flexDirection="row" alignItems="center" gap={1} p={2}>
                            <Person />
                            <Typography variant="h6" component="h1">
                                Profile
                            </Typography>
                        </Box>
                        <UserDetails user={user} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={2}>
                        <Box display='flex' flexDirection="row" alignItems="center" gap={1} p={2}>
                            <LocalFireDepartment />
                            <Typography variant="h6" component="h2">
                                Heatmap
                            </Typography>
                        </Box>
                        <Example width={200} height={200} margin={{top: 0, bottom: 0, left: 0, right: 0}} />
                        <Box sx={{display: 'flex', flexDirection:'column', alignItems: 'stretch',  gap: 1, p: 2}}>
                            <Button href="./" variant="outlined">Detailed View</Button>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={2}    >
                        <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: 1, p: 2, pb: 2}}>
                            <MonitorHeart />
                            <Typography variant="h6" component="h2">
                                Workout Feed
                            </Typography>
                        </Box>
                        <Feed workouts={workouts}/>
                        <Box sx={{display: 'flex', flexDirection:'column', alignItems: 'stretch',  gap: 1, p: 2}}>
                            <Button href='./' variant="outlined">All Activity</Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );  
}
