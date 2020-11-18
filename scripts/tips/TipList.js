import { useTip } from './TipDataProvider.js';
import { Tip } from './Tip.js';

export const TipList = () => {
    const contentElement = document.querySelector('.tankTips');
    const allTheTips = useTip();

    for (const tipObj of allTheTips){
        const tipHTML = Tip(tipObj);

        contentElement.innerHTML += tipHTML;
    }
}