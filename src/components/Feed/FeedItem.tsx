import { InsertEmoticon } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Workout } from "../../types/workout";
import { FeedItemIcon } from "./FeedItemIcon";
import { workoutTypeToColors } from "../../utils/workoutTypeToColors";
export type FeedItemProps = {
    workout: Workout;
};

export const FeedItem = (props: FeedItemProps) => {
    const {workout} = props;
    const workoutTypeColors = workoutTypeToColors[workout.type];
    return (
        <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", gap: 2, p: 1}}>
            <Box sx={{p: 1, bgcolor: workoutTypeColors[0], color:  workoutTypeColors[1], display: 'flex', alignItems: "center", justifyContent: "center", borderRadius: 50}}>
                <FeedItemIcon workoutType={workout.type}/>
            </Box>
            <Box sx={{display: "flex", flexDirection: "column",  gap: 0.5}}>
                <Typography variant={'body2'} color={"#455A64"}>
                    {workout.type}
                </Typography>
                <Typography variant={"body2"} color={'#263238'}>
                    {workout.caloriesBurned} cal - {workout.date.toLocaleDateString()} 
                </Typography>
            </Box>
        </Box>
    );
}