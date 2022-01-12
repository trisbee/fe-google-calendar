export type QueryParams = {
    [key: string]: string
};

export function queryParams(params: QueryParams): string {
    return Object.keys(params)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');
}
