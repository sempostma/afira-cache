
export default (regex: string) => {
    return regex.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
