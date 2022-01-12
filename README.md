# @trisbee/google-calendar

Wrapper for Google Calendar iframe.
Multiple calendars support, nice syntax.

## Example usage

```typescript
import GoogleCalendar, { Holidays } from '@trisbee/google-calendar'

/** for example your shared calendars */
const shared = {
    vaccations: {
        src: 'en.czech#holiday@group.v.calendar.google.com',
        color: '#B1365F',
    },
    booking: {
        src: 'en.spain#holiday@group.v.calendar.google.com',
        color: '#23164E',
    },
};

/** you can show national holidays if you want to */
const calendars = [
    shared.vaccations,
    shared.booking,
    Holidays.CZECHIA,
    Holidays.SLOVAKIA,
    Holidays.PERU,
    Holidays.SPAIN,
    Holidays.ITALY,
];

const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

return (
    <GoogleCalendar
        title={'Nice calendar'}
        calendars={calendars}
        language={'en'}
        timeZone={timeZone}
    />
)
```
