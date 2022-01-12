import {queryParams, QueryParams} from "./QueryParams";

/**
 * https://support.google.com/calendar/thread/23205641/advanced-embed-option-descriptions?hl=en
 */
function getUrlOfAllCalendars(calendars: QueryParams[]): string {
    let all: string = '';
    for (const i of calendars) {
        all += `&${queryParams(i)}`;
    }
    return all;
}

export default getUrlOfAllCalendars;
