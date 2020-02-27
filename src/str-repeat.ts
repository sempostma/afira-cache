export default (str: string, n: number) => {
    if (n === 0) return '';
    n = n || 1;
    return Array(n + 1).join(str);
}