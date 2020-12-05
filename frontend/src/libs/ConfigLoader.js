import config from "../assets/config";

/**
 * title array
 * */
let title = config.map(item => {
    return {
        year: item.year,
        title: item.title,
    }
})

/**
 * convert year to config section index
 * @param year              year in config and title array
 * */
let year2index = function (year) {
    for (let index = 0; index < config.length; index++) {
        if (config[index].year === year)
            return config[index].index
    }
}

export default {
    config: config,
    title: title,
    year2index: year2index
}