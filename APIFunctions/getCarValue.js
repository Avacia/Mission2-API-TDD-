const modelValidation = /^[^\d]+$/
const yearValidation = /^\d{4}$/
const symbolValidation = /^[+*/=!@#$%^&,.?\-\s]+$/
const timesHundred = 100
const charValueDifference = 96


function getCarValue(model, year){

    if(!checkYear(year)){
        return false
    }

    if(!checkModel(model)){
        return year
    }

    else{
        const newModelName = removeSymbol(model)
        const modelValue = calculateModelValue(newModelName)
        const carValue = modelValue * timesHundred + parseInt(year)
        return carValue
    }

}


function checkModel(model){ 
    const newModelName = removeSymbol(model)
    return modelValidation.test(newModelName)
}

function checkYear(year){
    return (yearValidation.test(year)) ? checkYearIsPositive(year) : false
}

function checkYearIsPositive(year){
    return year > 0
}

function removeSymbol(model){
    for(let i = 0; i < model.length; i++){
        if(symbolValidation.test(model[i])){
            symbol = model[i]
            model = model.replaceAll(`${symbol}`, '')
            i --
        }
    }
    return model
}

function calculateModelValue(model){
    const modelValue = model.toLowerCase().split('').reduce((acc, curr) => {
        return acc + curr.charCodeAt(0) - charValueDifference
    }, 0)

    return modelValue
}

module.exports = { getCarValue, checkModel, checkYear, removeSymbol, calculateModelValue }