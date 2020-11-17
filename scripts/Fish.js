/**
 * The Fish() function takes an object [fish] as an argument and 
 * creates a block of HTML using the object's key-value pairs.
 * 
 * Fish() is sent to FishList.js
 */

export const Fish = (fish) => {
    return `
    <section class="fish card">
        <div><img  class="fish__image image--card" src="./images/${fish.image}" /></div>
        <div class="fish__name">Name: ${fish.name}</div>
        <div class="fish__species">Species: ${fish.species}</div>
        <div class="fish__length">Length: ${fish.length}in</div>
        <div class="fish__location">Harvest Location: ${fish.location}</div>
        <div class="fish__diet">Diet: ${fish.diet}</div>
    </section>
`
}