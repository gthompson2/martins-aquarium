/**
 * get fish arrays from FishSorter.js
 * 
 * get function that turns objects into HTML elements from Fish.js
 */
import { holyFish, soldiers, regularFish } from './sorting/fishSorter.js';
import { Fish } from './Fish.js';

/**
 * Forgot what I was going to comment here...
 */
export const FishList = () => {

    // Get a reference to the `<article class="fishList">` element
    /**
     * document.querySelector returns the first element in index.html
     * with the class .fishList, which is stored in the contentElement
     * variable
     */
    const contentElement = document.querySelector(".fishList")
        // contentElement = <article class="fishList"></article>
    
    /**
     *  the variable allTheFish stores the array from 
     *  FishDataProvider.js, which is exported to this file
     *  using the function useFish()
     */
    const allHolyFish = holyFish();
	const allSoldierFish = soldiers();
	const allUnworthyFish = regularFish();

    /**
     * Variable fishObj pulls objects from allTheFish one at a time.
     * 
     * objects get used by Fish() to create HTML elements, which
     * get stored in the fishHTML variable.
     * 
     */
    for (const fishObj of allHolyFish) {
        const fishHTML = Fish(fishObj); 
        /**  fishObj goes through Fish()
         *  before being assigned to  fishHTML
         */

        // Add to the existing HTML in the content element
        contentElement.innerHTML += fishHTML
        
    }

    // This is repetitive. Try to come up with a better way 
    // to do this.
    for (const fishObj of allSoldierFish) {
        const fishHTML = Fish(fishObj);
        contentElement.innerHTML += fishHTML;
        
    }

    for (const fishObj of allUnworthyFish) {
        const fishHTML = Fish(fishObj);
        contentElement.innerHTML += fishHTML;
        
    }    

}