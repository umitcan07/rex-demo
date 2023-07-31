import moment from 'moment';

export type SortableByDate = { date: Date };

export const sortByDate = (array: SortableByDate[]) => {
    return array.sort((a, b) => {
        return moment(a.date).diff(moment(b.date));
    });
}
