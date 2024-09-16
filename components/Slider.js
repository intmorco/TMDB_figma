import { getData } from "../lib/https.request"

export function Slider(item) {
    const slider_div = document.createElement('div')
    const slider_img = document.createElement('div')
    const slider_title = document.createElement('span')

    slider_div.classList.add('slider_div')
    slider_img.classList.add('slider_img')
    slider_title.classList.add('slider_title')

    slider_title.innerHTML = item.title
    slider_img.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`

    slider_div.append(slider_img, slider_title)

    slider_div.onclick = async () => {
        const iframe = document.querySelector('iframe')
        const res = await getData(`/movie/${item.id}/videos`)
        const finded = res.results.find(item => item.type === "Trailer")

        iframe.src = "https://www.youtube.com/embed/" + finded.key
    }

    return slider_div
}   