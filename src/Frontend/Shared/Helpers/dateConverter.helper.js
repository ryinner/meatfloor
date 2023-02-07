export default function (date, withTime = false) {
    const dateObject = new Date(date);
    return `${dateObject.toLocaleDateString()}${withTime ? ` ${dateObject.toLocaleTimeString()}` : ''}`;
}