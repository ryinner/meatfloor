export default function (length = 6) {
    const alphabet = 'qwertyuiopasdfghjklzxcvbnm1234567890';
    let hashString = '';

    while (hashString.length < length) {
        hashString += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
    }

    return hashString;
}