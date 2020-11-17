/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */

const fishCollection = [
    {
        image: "goldfish.jpg",
        name: "Tom",
        species: "Goldfish",
        length: 3,
        location: "Neighbor's Backyard Pond",
        diet: "Cheetos",
    },
    {
        image: "angelfish.jpg",
        name: "Heather",
        species: "Angelfish",
        length: 5,
        location: "Neighbor's Backyard Pond",
        diet: "Cheez-its",
    },
    {
        image: "Barracuda.jpg",
        name: "Bradley",
        species: "Barracuda",
        length: 36,
        location: "Neighbor's Backyard Pond",
        diet: "clownfish",
    }
]

/**
 * The below code returns the fishCollection array to the 
 *  useFish function, then exports useFish() for use by another
 *  file.
 * 
 *  export is sent to FishList.js
 */
export const useFish = () => {
    return fishCollection.slice();
}
    
