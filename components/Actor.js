export function Actor(item) {
    const person = document.createElement('div')
    const rating = document.createElement('span')
    const info = document.createElement('div')
    const person_name = document.createElement('h3')
    const person_name_org = document.createElement('span')
    const person_age = document.createElement('span')

    person.classList.add('person')
    rating.classList.add('rating')
    info.classList.add('info')
    person_name.classList.add('person_name')
    person_name_org.classList.add('person_name_org')
    person_age.classList.add('person_age')

    const currentRank = document.querySelectorAll(".person").length + 1; /*stole from Mirko*/
   
    person.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${item.profile_path})`
    rating.innerHTML = `${currentRank} - место`;
    person_name.innerHTML = item.name
    person_name_org.innerHTML = item.original_name
    person_age.innerHTML = item.id

    person.append(rating, info)
    info.append(person_name, person_name_org, person_age)



    return person
}