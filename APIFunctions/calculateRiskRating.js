const  calculateRiskRating = (text)=> {

    try{

        // Check if the input contains only non-alphabetic characters or Checks if the input is a valid string
        if (/^[^a-zA-Z]+$/.test(text) || typeof text !== 'string' || text.length === 0) {
            return { message: "there is an error" };
        }

        // List of keywords
        const keywords = ["collide", "crash", "scratch", "bump", "smash"];

        // Combine the keywords into a regular expression
        const pattern = new RegExp(`\\b(${keywords.join('|')})(es|s|ed)?\\b`, 'gi');

        // Finds all occurrences of the keywords in the text
        const matches = text.match(pattern);

        // Calculates the rating by counting the occurrences if 0 then 1
        const rating = matches ? matches.length : 1;

        return rating<=5 ? {risk_rating:rating} : {risk_rating:5};

    } catch (error) {
        return { message: 'there is an error', error };
    }
}


module.exports = { calculateRiskRating }