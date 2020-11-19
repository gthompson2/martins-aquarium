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
        length: 15,
        location: "Neighbor's Backyard Pond",
        diet: "Cheez-its",
    },
    {
        image: "Barracuda.jpg",
        name: "Bradley",
        species: "Barracuda",
        length: 75,
        location: "Neighbor's Backyard Pond",
        diet: "clownfish",
    },
    {
        image: "marlin.jpg",
        name: "Bob",
        species: "Marlin",
        length: 145,
        location: "Neighbor's Backyard Pond",
        diet: "Grapefruit",
    },
    {
        image: "sailfish.jpg",
        name: "Susan",
        species: "Marlin",
        length: 115,
        location: "Neighbor's Backyard Pond",
        diet: "Doritos",
    },
    {
        image: "guppy.jpg",
        name: "George",
        species: "Guppy",
        length: 2,
        location: "Neighbor's Backyard Pond",
        diet: "Porridge",
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
    
