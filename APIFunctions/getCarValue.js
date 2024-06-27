const modelValidation = /^[A-Za-z]+$/
const yearValidation = /^\d{4}$/
const timesHundred = 100
const charValueDifference = 96


function getCarValue(model, year){

    if(!checkYear(year)){
        return "there is an error"
    }

    if(!checkModel(model)){
        return year
    }

    else{
        const modelValue = model.toLowerCase().split('').reduce((acc, curr) => {
            return acc + curr.charCodeAt(0) - charValueDifference
        }, 0)

        const carValue = modelValue * timesHundred + parseInt(year)

        return carValue
    }

}


function checkModel(model){
    return modelValidation.test(model)
}

function checkYear(year){
    return yearValidation.test(year) && year > 0
}

module.exports = { getCarValue }