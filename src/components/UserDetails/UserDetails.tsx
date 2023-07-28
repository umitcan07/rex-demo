import { AssignmentTurnedIn, Stars } from "@mui/icons-material";
import { Box, Avatar, Typography, Divider } from "@mui/material";
import { User } from "../../types";
import { Badge } from '@mui/material';

type UserDetailsProp = {
    user: User
}

export const UserDetails = (props: UserDetailsProp) => { 
    const { user } = props;
    return (
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", gap: 1.5, p: 1}}>
        <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} badgeContent={ <Box sx={{bgcolor: "white", borderRadius: 999, color: '#9747FF'}}><Stars /></Box> }>
            <Avatar sx={{height: 64, width: 64}} alt="Travis Howard" src={user.profileImageUrl} />
        </Badge>
           <Box sx={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
                <Typography variant={'h6'} component={'span'}  color={"#131520"}>
                    Umit Can Evleksiz
                </Typography>
                <Typography variant={'body1'} component={'span'} color={'#656B7B'}>
                    @umitcanfit
                </Typography>
            </Box>
            <Divider sx={{alignSelf: 'stretch'}} />
            <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: 1, p: 2}}>
                <AssignmentTurnedIn />
                <Typography variant={'body1'} color={"#455A64"}>
                    You are cooking this week so far!
                </Typography>
            </Box>
        </Box>
    );
}