function addTokens(input, tokens){
    
    if (typeof input !== 'string') throw 'Invalid input'
    if (input.length < 6) throw 'Input should have at least 6 characters'
    if (!tokens.every((token) => Object.keys(token).length === 1 && typeof token.tokenName === 'string'))
      throw 'Invalid array format'
    return tokens.reduce((acc, { tokenName }) => acc.replace('...', `\$\{${tokenName}\}`), input)
    
}

const app = {
    addTokens: addTokens
}

module.exports = app;