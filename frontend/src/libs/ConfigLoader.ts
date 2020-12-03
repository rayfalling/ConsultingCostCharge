let config = require("../assets/config.js")

let title = config.flatMap(item => {
    return {
        year: item.year,
        title: item.title,
    }
})

let year2index = function (year: Number) {
    for (let index = 0; index < config.length; index++) {
        if (config[index].year == year)
            return config[index].index
    }
}

export default {
    config: config,
    title: title,
    year2index: year2index
}