export let longNames = ['bytes', 'kilo bytes', 'mega bytes', 'giga bytes', 'terra bytes']
export let shortNames = ['bytes', 'kb', 'mb', 'gb', 'tb']

export default (bytes: number, size: 'long' | 'short' = 'short') => {
    const names = size === 'long'
        ? longNames
        : shortNames;
    if (bytes <= 0) {
        return '0 ' + names[0];
    }
    const index = Math.min(
        Math.floor(Math.log(bytes) / Math.log(1024)),
        names.length
    );
    const units = Math.round(bytes / Math.pow(1024, index));
    return units + ' ' + names[index];
}