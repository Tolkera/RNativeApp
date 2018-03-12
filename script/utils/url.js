export function transformToQuery(params) {
    var esc = encodeURIComponent;

    return Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');
}
