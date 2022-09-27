import axios from 'axios'

//Fetch the data using axios
export const fetchData = async () => {
    const URL = 'https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json'
    const { data: result } = await axios.get(URL)

    //To filter only people who have pets, as not everyone has pets
    const peopleWithPets = result.filter(obj => obj.pets)

    return peopleWithPets
}


//As per the challenge requirement - to list sorted cat names under the gender of their owner
export const populateCatsBasedOnGender = (array, gender) => {
    let temp = []

    const genderArray = array.filter(el => el.gender === gender)

    genderArray.forEach(el => {
        el.pets.forEach(pet => {
            if (pet.type === 'Cat') temp.push(pet)
        })
    })

    return temp
}


//To produce an array of cat string names and sort them alphabetically 
export const createAndSortCats = arr => {
    let tempArray = []
    arr.forEach(el => {
        tempArray.push(el.name)
    })
    return tempArray.sort()
}


//For the filter feature to work
export const filterCats = (arr, filtered) => {
    return arr.filter(el => {
        return el.toLowerCase().includes(filtered.toLowerCase())
    })
}


//A simple delay function for the validation
export const delay = milliseconds => {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds)
    })
}

export const outputPets = (arr, type, gender) => {
    let temp = []

    const genderArray = arr.filter(el => el.gender.toLowerCase() === gender.toLowerCase())

    genderArray.forEach(el => {
        el.pets.forEach(el => {
            if (el.type.toLowerCase() === type.toLowerCase()) temp.push(el.name)
        })
    })
    return temp.sort()
}