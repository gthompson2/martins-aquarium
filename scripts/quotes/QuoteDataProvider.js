const quoteCollection = [
    {
        quote: "Just Keep Swimming!",
        author: "Dory"
    },
    {
        quote: "Mr. Turtle is my father. The name's Crush.",
        author: "Crush"
    },
    {
        quote: "Fish are friends, not food.",
        author: "Bruce"
    }
]

export const useQuote = () => {
    return quoteCollection.slice();
}