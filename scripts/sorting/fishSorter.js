/**
 * This file imports the array of objects from FishDataProvider
 * and separates the fish based on length into 3 more arrays.
 * 
 * Those three arrays are then exported for use by FishList.js
 */

 import { useFish } from '../FishDataProvider.js';

const mostHolyFish = [];
const soldierFish = [];
const unworthy = [];

// import FDP's fish array and store it in tank
const tank = useFish();


/**
 * Fish get sorted using if/else statements wrapped in
 * a for loop. 
 * The if/elif/else ensures that no fish gets counted twice
 */
for (const fish of tank){
	if ((fish.length%3) === 0){
		mostHolyFish.push(fish)
	}else if ((fish.length%5) === 0){
		soldierFish.push(fish)
	}else {
		unworthy.push(fish)
	}
}

export const holyFish = () => {
	return mostHolyFish.slice();
}
export const soldiers = () => {
	return soldierFish.slice();
}
export const regularFish = () => {
	return unworthy.slice();
}

