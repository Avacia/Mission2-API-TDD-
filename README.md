# Mission 2: API Testing with TDD

This application is used to test if the function is working as it should be. Jest is used for testing the function availability. 

## Technologies Used
- JavaScript
- Jest
- Express
- CORS
- Dotenv
- FS

## Features
- RESTful API for user requests
- File management for storing car data
- Test-Driven Development using Jest

## How to Run
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Avacia/Mission2-API-TDD.git
   cd Mission2-API-TDD
   ```
   
2. **Install dependencies:**
   ```bash
   npm install
   ```
   
3. **Set up environment variables:**
   Create a `.env` file with your configurations.

4. **Start the server:**
   ```bash
   npm start
   ```

5. **Run tests:**
   ```bash
   npm test
   ```

## File Management
When a car model and year are sent to the server, a file called data is created to store the values of each car that pass the test in the `APIFunctions` file.

## Test-Driven Development
Jest is used to test the functions in the `APIFunctions` file to ensure they are working as intended.

## License
This project is licensed under the MIT License.
