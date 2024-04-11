# Survey API

This is a simple Express.js API for managing surveys.

## Setup

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `npm serve` to start the server.
4. Run `npm dev` to start using nodemon.
5. Run `npm test` to run test using jest

## API Endpoints

### GET /surveys

Returns a list of all surveys.

### POST /surveys

Creates a new survey. The body of the request should be a JSON object representing the survey.

### PUT /surveys/:id

Updates the survey with the given ID. The body of the request should be a JSON object representing the updated survey.

### DELETE /surveys/:id

Deletes the survey with the given ID.

## Data Structure

A survey is represented as a JSON object with the following structure:

```json
{
    "id": 1,
    "title": "Survey 1",
    "questions": [
        {
            "id": 1,
            "question": "Question 1",
            "type": "text"
        },
        {
            "id": 2,
            "question": "Question 2",
            "type": "text"
        }
    ]
}