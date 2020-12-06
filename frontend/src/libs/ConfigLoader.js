import config from "@/assets/config";

/**
 * title array
 * */
let title = config.flatMap(item => {
    return {
        year: item.year,
        title: item.title,
    }
})

/**
 * filter config items by year
 *
 * @param year              year in config
 * @param index             index of item
 * */
let configItem = function (year, index) {
    return configItemList(year)[index - 1]
}

/**
 * filter config items by year
 *
 * @param year              year in config
 * */
let configItemList = function (year) {
    let sectionIndex = year2index(year)
    return config[sectionIndex - 1].items
}

/**
 * convert year to config section index
 *
 * @param year              year in config and title array
 * */
let year2index = function (year) {
    for (let index = 0; index < config.length; index++) {
        if (config[index].year === Number(year)) {
            return config[index].index
        }
    }
}

export default {
    config: config,
    title: title,
    year2index: year2index,
    configItem: configItem,
    configItemList: configItemList
}