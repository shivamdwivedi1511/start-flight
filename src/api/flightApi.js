export function flightApi(http) {
    return {
        get: (q) => {
            return http.get(q);
        },
    };
}