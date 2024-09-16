import { Actor } from "./components/Actor";
import { Header } from "./components/Header";
import { Card } from "./components/Сard";
import { reload } from "./lib/utils";
import { Footer } from "./components/Footer";
import { getData } from "./lib/https.request";
import { Slider } from "./components/Slider";
import { SubForm } from "./components/SubForm"

Header()
const cont = document.querySelector('.container')

const res_now_playing = await getData("/movie/now_playing")
const res_top_rated = await getData("/movie/top_rated")
const res_upcomimg = await getData("/movie/upcoming")
const res_popular_people = await getData("/person/popular")


const movie_grid = document.querySelector('.movie_grid')
const popular = document.querySelector('.popular')
const upcoming = document.querySelector('.upcoming')
const sliders = document.querySelector('.slider')
const people = document.querySelector('.people')

reload(res_now_playing.results.slice(0, 4), Card, movie_grid)
reload(res_top_rated.results.slice(0, 4), Card, popular)
reload(res_upcomimg.results.slice(0, 4), Card, upcoming)
reload(res_top_rated.results.slice(0, 4), Slider, sliders)
reload(res_popular_people.results.slice(0, 3), Actor, people)

console.log(res_popular_people.results.slice(0, 3))

const show_all = document.querySelector('.show_all')
const hide = document.querySelector('.hide')

show_all.onclick = () => {

    reload(res_now_playing.results, Card, movie_grid)
    show_all.classList.add('hide')
    hide.classList.remove('hide')

}

hide.onclick = () => {

    reload(res_now_playing.results.slice(0, 4), Card, movie_grid)
    hide.classList.add('hide')
    show_all.classList.remove('hide')

}

const top_rated_first = await getData(`/movie/${res_top_rated.results[7].id}/videos`);
const finded = top_rated_first.results.find((item) => item.type === "Trailer")
const iframe = document.querySelector('iframe')

iframe.src = "https://www.youtube.com/embed/" + finded.key

SubForm()
Footer()
