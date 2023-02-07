export default function (timestamp) {
    const time = timestamp.split(' ')[1];
    const timeVariables = time.split(':');

    return `${timeVariables[0]}:${timeVariables[1]}`;
}