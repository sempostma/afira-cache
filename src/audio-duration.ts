export default (src: string | HTMLAudioElement) => new Promise((resolve, reject) => {
    try {
        let audio: HTMLAudioElement
        if (typeof src === 'string') audio = new Audio()
        else audio = src

        if (isFinite(audio.duration)) resolve(audio.duration)
        else {
            audio.addEventListener("loadedmetadata", () => {
                resolve(audio.duration);
            });
        }
        if (typeof src === 'string') {
            audio.src = src
            audio.preload="metadata"
        }
    } catch (err) {
        reject(err)
    }
});

