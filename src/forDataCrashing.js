
const crashSymbols = '!<>-_\\/[]{}—=+*^?#________'

const getRandomSymbol = (currentSymbol) => {
    const symbols = crashSymbols + currentSymbol
    return symbols[Math.floor(Math.random() * symbols.length)]
}
export {
    getRandomSymbol
}