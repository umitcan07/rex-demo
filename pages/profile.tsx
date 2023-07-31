'use client'

import { LocalFireDepartment, MonitorHeart, Person } from '@mui/icons-material';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';

import { Feed } from '../src/components/Feed/Feed';
import { Heatmap } from '../src/components/Heatmap/';
import { UserDetails } from '../src/components/UserDetails/UserDetails';
import { users } from '../src/data/users';

export default function Profile() {
    const [userIdx, setUserIdx] = useState(0);
    return (
        <Container sx={{ py: { xs: 4, md: 6, lg: 8 } }} maxWidth="md">
            <Grid container spacing={{ xs: 3, md: 5 }}>
                <Grid item xs={12}>
                    <Paper elevation={1} >
                        <Box display='flex' flexDirection="row" alignItems="center" gap={1} p={2}>
                            <Person />
                            <Typography variant="h6" component="h1">
                                Profile
                            </Typography>
                        </Box>
                        <UserDetails user={users[userIdx]} />
                    </Paper>
                </Grid>
                <Grid sx={{ height: 400 }} item xs={12} md={6}>
                    <Paper sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }} elevation={1}>
                        <Box display='flex' flexDirection="row" alignItems="center" gap={1} p={2}>
                            <LocalFireDepartment />
                            <Typography variant="h6" component="h2">
                                Heatmap
                            </Typography>
                        </Box>
                        <Box sx={{ flex: 1, overflow: 'auto' }} display='flex' flexDirection="column" alignItems="center" justifyContent="center">
                            <Heatmap />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection:'column', alignItems: 'stretch',  gap: 1, p: 2 }}>
                            <Button href="./" variant="outlined">Detailed View</Button>
                        </Box>
                    </Paper>
                </Grid>
                <Grid sx={{ height: 400 }} item xs={12} md={6}>
                    <Paper sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }} elevation={1}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1, p: 2, pb: 2 }}>
                            <MonitorHeart />
                            <Typography variant="h6" component="h2">
                                Workout Feed
                            </Typography>
                        </Box>
                        <Box sx={{ flex: 1, overflow: 'auto' }}>
                            <Feed workouts={users[userIdx].workouts}/>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection:'column', alignItems: 'stretch',  gap: 1, p: 2 }}>
                            <Button href='./' variant="outlined">All Activity</Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
            <Box position={{ md: 'static', xs: 'fixed' }} bottom={5} p={5} sx={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection:'row', justifyContent: 'center' }}>
                <Button onClick={() => setUserIdx(userIdx => (userIdx + 1) % users.length)} variant="contained" size='large'>Shuffle User</Button>
            </Box>
        </Container>
    );  
}
