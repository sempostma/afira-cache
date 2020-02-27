import requestIdleTime from './request-idle-time'

const rembember: { [src: string]: HTMLImageElement } = {};

export default (src: string) => new Promise((resolve, reject) => {
  if (src in rembember) return resolve(rembember[src]);

  requestIdleTime().then(() => {
    if (src in rembember) return resolve(rembember[src]);
    const imgEle = document.createElement("img");
    imgEle.onload = () => resolve(imgEle)
    imgEle.onerror = reject
    imgEle.src = src;
    rembember[src] = imgEle;
  }).catch(reject)
})

