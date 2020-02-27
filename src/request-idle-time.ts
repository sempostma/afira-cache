export default () => new Promise((resolve, reject) => {
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        (window as any).requestIdleCallback(resolve, { timeout: 1000 });
    } else {
        setTimeout(resolve, 0);
    }
})