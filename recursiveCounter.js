const recursiveCounter = (number) => {
    if (number <= 1) return `1`;
    return `${recursiveCounter(number - 1)} ${number}`;
};