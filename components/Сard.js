export function Card(item, genres) {
    const body = document.body
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
    card_img.append(card_rating)
    details.append(title, genre)

    movie_card.onmousemove = () => {
        body.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`;
    };

    movie_card.onmouseout = () => {
        body.style.backgroundColor = "#1A2336";
        body.style.backgroundImage = "none";
    };

    // if (genre) {
    //     genre.innerHTML = item.genre_ids.map((id) => {
    //         const genreObj = genres.find((genre) => genre.id === id);
    //         return genreObj ? genreObj.name : "";
    //     }).join(", ");
    // }

    return movie_card

}