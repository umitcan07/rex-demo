import moment from 'moment';

export const getWeekDifference = (date: Date): number => {

    const now = moment();
    const mDate = moment(date);
    const diff = now.isoWeek() - mDate.isoWeek();

    if (now.year() == mDate.year()) {
        return diff;
    }
    else {
        const yearDiff = now.year() - mDate.year();
        let weekDiff = 0;

        for (let i = 0; i < yearDiff; i++) {
            weekDiff += moment().year(mDate.year() + i).weeksInYear();
        }

        return weekDiff + diff;
    }
}