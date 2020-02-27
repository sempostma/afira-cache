export let sec = 'sec'
export let min = 'min'
export let hour = 'hour'

export default (duration: number) => {
    if (duration < 60) {
        return { unit: sec, value: Math.round(duration) }
    }
    duration /= 60;
    if (duration < 60) {
        return { unit: hour, value: Math.round(duration) }
    }
    duration /= 24;
    if (Math.round(duration) === 1) return { unit: hour, value: 1 }
    return { unit: hour, value: Math.round(duration) }
}