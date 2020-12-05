import ConfigLoader from "./ConfigLoader";

/**
 * @param value         Number represent actual value
 * @param config        Current item rate represent actual value
 *                      {
 *                         "thousandth": value
 *                         "percentage": value
 *                      }
 * @return              calculated sum
 * */
let switchRate = function (value, config) {
    if ("thousandth" in config) {
        return value * config["thousandth"] / 1000
    } else if ("percentage" in config) {
        return value * config["percentage"] / 100
    }
}

/**
 * calculate rate mode items result
 * @param rates         Global rates with range value in config
 * @param rateConfig    Current item rate represent actual value in config
 * @param value         Number present actual value
 * @return              calculated sum
 * */
let rateMode = function (rates, rateConfig, value) {
    let sum = 0;
    for (let index = 0; index < length(rates); index++) {
        let min = rates[index]["min"]
        let max = rates[index]["max"]
        if (max === "unlimited") {
            sum += switchRate(value - min, rateConfig[index])
        } else {
            if (value < max) {
                sum += switchRate(value - min, rateConfig[index])
                break;
            } else {
                sum += switchRate(max - min, rateConfig[index])
            }
        }
    }
    return sum
}

/**
 * calculate range mode items result
 * @param rateConfig    Current item rate represent actual value in config
 * @param value         struct {
 *                          value: Number,
 *                          rate: Number, present in percentage
 *                      }
 * */
let rangeMode = function (rateConfig, value) {
    let sum = 0;
    let min = rateConfig["min"]
    let max = rateConfig["max"]
    if ("rate" in value && "value" in value) {
        if (value["rate"] > max)
            sum = switchRate(value["value"], max);
        else if (value["rate"] < min)
            sum = switchRate(value["value"], min);
        else {
            sum = switchRate(value["value"], {"percentage": value["rate"]})
        }
    }
    return sum
}

/**
 * calculate fixed mode items result
 * @param rateConfig    Current item rate with actual value in config
 * @param value         Number represent actual value
 * @return              calculated sum
 * */
let fixedMode = function (rateConfig, value) {
    return switchRate(value, rateConfig)
}

/**
 * Calculate by config
 * @param rates         Global rates with range in config
 * @param rateConfig    Current item rate represent actual value in config
 * @param value         Number present actual value
 * */
let innerCalculate = function (rates, rateConfig, value) {
    let mode = rateConfig["mode"]
    switch (mode) {
        case "rate":
            return rateMode(rates, rateConfig["rate"], value)
        case "range":
            return rangeMode(rateConfig["rate"], value)
        case "fixed":
            return fixedMode(rateConfig["rate"], value)
        default:
            return 0
    }
}

/**
 * Calculate the value
 * @param year          year represent to index in config array
 * @param itemIndex     item index in section config array
 * @param value         value need to calculate
 * */
let calculate = function (year, itemIndex, value) {
    let index = ConfigLoader.year2index(year)
    let configSection = ConfigLoader.config[index]
    let rates = configSection.rates
    let rateConfig = configSection.items[itemIndex - 1]
    return innerCalculate(rates, rateConfig, value)
}

export default {
    calculate
}