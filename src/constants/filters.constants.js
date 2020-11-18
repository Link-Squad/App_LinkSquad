export const filterFn = {
    game: {
        platform: (game, value) => game.platform.includes(value)
    }
}

export const filterOptions = {
    game: {
        platforms: ['PC', 'PS', 'SWITCH', 'XBOX']
    }
}