const  calculateRiskRating = (text)=> {

    try{
        // Lista de palabras clave
        const keywords = ["collide", "crash", "scratch", "bump", "smash"];

        // Combina las palabras clave en una expresión regular
        const pattern = new RegExp(`\\b(${keywords.join('|')})(es|s)?\\b`, 'gi');

        // Verifica si la entrada es una cadena válida
        if (typeof text !== 'string') {
            return { message: "there is an error"};
        }

        // Encuentra todas las ocurrencias de las palabras clave en el texto
        const matches = text.match(pattern);

        // Calcula el rating contando las ocurrencias
        const rating = matches ? matches.length : 0;

        return rating<=5 ? {risk_rating:rating} : {risk_rating:5};

    } catch (error) {
        return { message: 'there is an error', error };
    }
}


module.exports = { calculateRiskRating }