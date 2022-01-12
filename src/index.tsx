import { queryParams, QueryParams } from './utils/queryParams';
import getUrlOfAllCalendars from "./utils/get-url";

interface Props {
    calendars: QueryParams[],
    title: string,
    language: string,
    timeZone: string | null,
    darkMode: boolean,
}

function Index({
    calendars,
    title,
    language,
    timeZone,
    darkMode,
}: Props) {
    const baseUrl = 'https://calendar.google.com/calendar/embed?';
    const allCalendars = getUrlOfAllCalendars(calendars);

    const config: QueryParams = {
        ctz: timeZone || 'Europe/Prague',
        hl: language,
        showCalendars: '1',
        showPrint: '0',
        showNav: '1',
        showTitle: '0',
        wkst: '2',
        bgcolor: (darkMode ? '#333333' : '#FFFFFF'),
    };

    const query = `${allCalendars}&${queryParams(config)}`;
    const embedURL = baseUrl + query;

    return (
        <div className="trisbee-google-calendar">
            <iframe
                title={title}
                src={embedURL}
                width="800"
                height="800"
                frameBorder="0"
                scrolling="no"
                style={{
                    width: '100%',
                    height: '800px',
                    maxWidth: '100%',
                    border: 0
                }}
            />
        </div>
    );
}

export default Index;
