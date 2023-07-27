import * as React from 'react';
import {Avatar, Box, Container, Grid, Icon, Paper, Typography} from '@mui/material';
import { InsertEmoticon, LocalFireDepartment, MonitorHeart, Person, PersonOffOutlined } from '@mui/icons-material';

export default function Profile() {
    return (
        <Container sx={{pt: 8}} maxWidth="sm">
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Paper elevation={3} >
                        <Box display='flex' flexDirection={'row'} alignItems={'center'} gap={1} p={2}>
                            <Person />
                            <Typography variant="h6" component="h1">
                                Profile
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={3}>
                        <Box display='flex' flexDirection={'row'} alignItems={'center'} gap={1} p={2}>
                            <LocalFireDepartment />
                            <Typography variant="h6" component="h2">
                                Heatmap
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={3}>
                        <Box display='flex' flexDirection={'row'} alignItems={'center'} gap={1} p={2}>
                            <MonitorHeart />
                            <Typography variant="h6" component="h2">
                                Feed
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );  
}
