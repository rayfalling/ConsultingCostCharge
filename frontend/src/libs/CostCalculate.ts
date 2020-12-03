import ConfigLoader from "./ConfigLoader";

let innerCalculate = function () {

}

let calculate = function (year, itemIndex, value) {
    let index = ConfigLoader.year2index(year)
    let item = ConfigLoader.config[index].years
    let rates = item.rates
    let rateConfig = rates[itemIndex - 1]

}

export default {
    calculate
}