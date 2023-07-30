'use client'

import { LocalFireDepartment, MonitorHeart, Person } from '@mui/icons-material';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import * as React from 'react';

import { Feed } from '../src/components/Feed/Feed';
import { Heatmap } from '../src/components/Heatmap/';
import { UserDetails } from '../src/components/UserDetails/UserDetails';
import { users } from '../src/data';
import { User, Workout  } from '../src/types';

export default function Profile() {
    const user: User = users[0];
    const workouts: Workout[] = user.workouts;
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
                        <Heatmap width={200} height={180} margin={{top: 0, bottom: 0, left: 0, right: 0}} />
                        <Box sx={{display: 'flex', flexDirection:'column', alignItems: 'stretch',  gap: 1, p: 2}}>
                            <Button href="./" variant="outlined">Detailed View</Button>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={2}>
                        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1, p: 2, pb: 2}}>
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
