const modelValidation = /^[A-Za-z]+$/
const yearValidation = /^\d{4}$/
const timesHundred = 100
const charValueDifferent = 96


function getCarValue(model, year){


    if(!modelValidation.test(model) && yearValidation.test(year)){
        return parseInt(year)
    }

    if(modelValidation.test(model) &&!yearValidation.test(year)){
        const modelValue = model.toLowerCase().split('').reduce((acc, curr) => {
            return acc + curr.charCodeAt(0) - charValueDifferent
        }, 0)
        modelValue = modelValue * timesHundred
        return modelValue
    }

    if(modelValidation.test(model) && yearValidation.test(year)){
        const modelValue = model.toLowerCase().split('').reduce((acc, curr) => {
            return acc + curr.charCodeAt(0) - charValueDifferent
        }, 0)

        carValue = modelValue * timesHundred + parseInt(year)

        return carValue
    }

    else{
        return "Wrong data type"
    }
}


function checkModel(model){

}

function checkYear(year){

}

module.exports = { getCarValue }