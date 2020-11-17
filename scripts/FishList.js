/**
 * get fish array from FishDataProvider.js
 * 
 * get function that turns objects into HTML elements from Fish.js
 */
import {useFish} from './FishDataProvider.js'
import { Fish } from './Fish.js'

/**
 * 
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
    const allTheFish = useFish()

    /**
     * Variable fishObj pulls objects from allTheFish one at a time.
     * 
     * objects get used by Fish() to create HTML elements, which
     * get stored in the fishHTML variable.
     * 
     */
    for (const fishObj of allTheFish) {
        const fishHTML = Fish(fishObj); 
        /**  fishObj goes through Fish()
         *  before being assigned to  fishHTML
         */

        // Add to the existing HTML in the content element
        contentElement.innerHTML += fishHTML
        
    }

}