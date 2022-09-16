import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button } from '@mui/material'

const DisplayContent = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const URL = 'https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json'
            const { data } = await axios.get(URL)
            setData(data)
        }
        fetchData()
    }, [])

    //To filter only people who have pets, as not everyone has pets
    let peopleWithPets = []
    data.forEach(obj => {
        if (obj.pets) peopleWithPets.push(obj)
    })

    //As per the challenge requirement - to list sorted cat names under the gender of their owner
    let catsObjWithMaleOwner = [] // [ {cat object}, {cat object}, {cat object} ]
    let catsObjWithFemaleOwner = [] // [ {cat object}, {cat object}, {cat object} ]

    peopleWithPets.forEach(el => {
        if (el.gender === 'Male') {
            el.pets.forEach(pet => {
                if (pet.type === 'Cat') catsObjWithMaleOwner.push(pet)
            })
        }
        if (el.gender === 'Female') {
            el.pets.forEach(pet => {
                if (pet.type === 'Cat') catsObjWithFemaleOwner.push(pet)
            })
        }
    })


    let catsMaleArray = [] // e.g. ['Jim', 'Tom', 'Garfield']
    catsObjWithMaleOwner.forEach(el => {
        catsMaleArray.push(el.name)
    })

    let catsFemaleArray = [] // e.g. ['Jim', 'Tom', 'Garfield']
    catsObjWithFemaleOwner.forEach(el => {
        catsFemaleArray.push(el.name)
    })

    const sortedMaleCats = catsMaleArray.sort()
    const sortedFemaleCats = catsFemaleArray.sort()

    const displayMaleCats = sortedMaleCats.map(cat => (
        <li key={cat}>{cat}</li>
    ))

    const displayFemaleCats = sortedFemaleCats.map(cat => (
        <li key={cat}>{cat}</li>
    ))

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {/* <Button variant='contained'>Display</Button> */}
            <div>
                <div>male</div>
                <ul>{displayMaleCats}</ul>
            </div>
            <div>
                <div>female</div>
                <ul>{displayFemaleCats}</ul>
            </div>

        </div>
    )
}

export default DisplayContent