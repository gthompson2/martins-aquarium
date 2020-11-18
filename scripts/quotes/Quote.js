export const Quote = (quoteObj) => {
    return `
        <section class="quote">
            <div class="quote__text">${quoteObj.quote}</div>
            <div class="quote__author">--${quoteObj.author}</div>
        </section>
    `

}