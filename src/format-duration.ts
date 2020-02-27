import formatDurationLabeled from './format-duration-labeled'

export default (duration: number) => {
    const labeled = formatDurationLabeled(duration);
    return labeled.value + ' ' + labeled.unit;
}