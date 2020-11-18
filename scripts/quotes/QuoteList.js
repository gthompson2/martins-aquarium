import {useQuote} from './QuoteDataProvider.js';
import {Quote} from './Quote.js';


export const QuoteList = () => {
    const contentElement = document.querySelector(".quotes")
    const allQuotes = useQuote();
    for (const quoteObj of allQuotes) {
        const quoteHTML = Quote(quoteObj);
        contentElement.innerHTML += quoteHTML;

    };
};