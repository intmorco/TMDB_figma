export function Card(item) {
    const movie_card = document.createElement('div')
    const card_img = document.createElement('div')
    const card_rating = document.createElement('div')
    const details = document.createElement('div')
    const title = document.createElement('div')
    const genre = document.createElement('div')
   



    movie_card.classList.add('movie_card')
    card_img.classList.add('card_img')
    card_rating.classList.add('card_rating')
    details.classList.add('details')
    title.classList.add('title')
    genre.classList.add('genre')


    card_img.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${item.poster_path})`;
    

    title.innerHTML = item.original_title
    genre.innerHTML = item.genre_ids
    card_rating.innerHTML = item.vote_average.toFixed(1)


    movie_card.append(card_img, details)
    card_img.append( card_rating)
    details.append(title, genre)


    const movie_grid = document.querySelector('.movie_grid')
    movie_grid.append(movie_card)

}