import { Header } from "./components/Header";
import { Card } from "./components/Сard";
import { reload } from "./lib/utils";

Header()

const cont = document.querySelector('.container')
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzdmZDlmZmRhNDU4ZWFkNjFmY2M4NGYxZDg4MjU2MyIsIm5iZiI6MTcyNTYyMDY3Ni4wMDMwOTcsInN1YiI6IjY2ZGE2MDA1NzRhYmViZjZmOThjYTgzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.huCjJkzXHk_kyZjeGeTipmuvzlMEhek8UUFeNAGk0E0"
const res = await fetch('https://api.themoviedb.org/3/movie/top_rated', {
    headers: {
        Authorization: `Bearer ${token}`
    }
})

const movie_grid = document.querySelector('.movie_grid')

const data = await res.json()


reload(data.results.slice(0,4), Card, movie_grid)

const show_all = document.querySelector('.show_all')

show_all.onclick = () => {
    reload(data.results, Card, movie_grid)

    show_all.style.display = 'none'

}
console.log( data)