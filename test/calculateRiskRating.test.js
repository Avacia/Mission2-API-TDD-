// Import the function to test
const { calculateRiskRating } = require('../APIFunctions/calculateRiskRating');

// Describe the group of tests for calculateRiskRating
describe('calculateRiskRating', () => {

    // Test case for valid string input with no keywords
    it('should return a risk rating of 1 for text with no keywords', () => {
        const text = "The car is parked in the garage.";
        const result = calculateRiskRating(text);
        expect(result).toEqual({ risk_rating: 1 });
    });

    // Test case for valid string input with multiple keywords
    it('should return a correct risk rating for text with multiple keywords', () => {
        const text = "The car was scratched and bumped in the crash.";
        const result = calculateRiskRating(text);
        expect(result).toEqual({ risk_rating: 3 });
    });

    // Test case for input with more than 5 keywords
    it('should return a maximum risk rating of 5 for text with more than 5 keywords', () => {
        const text = "Crash, smash, bump, scratch, collide, crash, bump.";
        const result = calculateRiskRating(text);
        expect(result).toEqual({ risk_rating: 5 });
    });

    // Test case for invalid input
    it('should return an error message for invalid input', () => {
        const text = 12345; // Non-string input
        const result = calculateRiskRating(text);
        expect(result).toEqual({ message: "there is an error" });
    });

    // Test case for invalid input
    it('should return an error message for invalid input', () => {
        const text = "{}{}{}{}{"; // Non-string input
        const result = calculateRiskRating(text);
        expect(result).toEqual({ message: "there is an error" });
    });


    // Test case for input with all keywords
    it('should return a risk rating of 5 for text with all unique keywords', () => {
        const text = "The car managed to collide, crash, scratch, bump, and smash all in one day.";
        const result = calculateRiskRating(text);
        expect(result).toEqual({ risk_rating: 5 });
    });

    // Test case for input with repeated keywords
    it('should return a risk rating of 5 for text with repeated keywords beyond the limit', () => {
        const text = "Crash! The car crashed again after it had already bumped, collided, scratched, and smashed.";
        const result = calculateRiskRating(text);
        expect(result).toEqual({ risk_rating: 5 });
    });

    // Test case for input with keywords in different cases
    it('should correctly identify keywords regardless of case', () => {
        const text = "The CAR had a minor SCRATCH and a small BUMP from the incident.";
        const result = calculateRiskRating(text);
        expect(result).toEqual({ risk_rating: 2 });
    });

    // Test case for input with keywords as part of other words
    it('should not count keywords if they are part of other words', () => {
        const text = "The car's dashboard had an icon resembling a smashed pumpkin.";
        const result = calculateRiskRating(text);
        expect(result).toEqual({ risk_rating: 1 }); // Assuming "smashed" in "smashed pumpkin" shouldn't count
    });

    // Test case for input with no text
    it('should return an error message for invalid input', () => {
        const text = "";
        const result = calculateRiskRating(text);
        expect(result).toEqual({ message: "there is an error"});
    });

    // Test case for input with only spaces
    it('should return an error message for invalid input', () => {
        const text = "     ";
        const result = calculateRiskRating(text);
        expect(result).toEqual({ message: "there is an error"});
    });

    // Test case for input with punctuation and keywords
    it('should correctly identify keywords surrounded by punctuation', () => {
        const text = "After the event, the car was scratched, bumped, and, surprisingly, not smashed.";
        const result = calculateRiskRating(text);
        expect(result).toEqual({ risk_rating: 3 });
    });

});
