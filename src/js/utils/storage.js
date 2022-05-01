
    export function get(key, defaultReturnValue) {
    return JSON.parse(localStorage.getItem(key)) || defaultReturnValue;
}

export function set(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
