const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

// In-memory data storage
let surveys = [
    {
        id: 1,
        title: 'Survey 1',
        questions: [
            {
                id: 1,
                question: 'Question 1',
                type: 'text',
            },
            {
                id: 2,
                question: 'Question 2',
                type: 'text',
            },
        ],
    },
    {
        id: 2,
        title: 'Survey 2',
        questions: [
            {
                id: 1,
                question: 'Question 1',
                type: 'text',
            },
            {
                id: 2,
                question: 'Question 2',
                type: 'text',
            },
        ],
    },
    {
        id: 3,
        title: 'Survey 3',
        questions: [
            {
                id: 1,
                question: 'Question 1',
                type: 'text',
            },
            {
                id: 2,
                question: 'Question 2',
                type: 'text',
            },
        ],
    },
];

app.use(bodyParser.json());

// Get all surveys
app.get('/surveys', (req, res) => {
    res.json(surveys);
});

// Add a new survey
app.post('/surveys', (req, res) => {
    const newSurvey = req.body;
    surveys.push(newSurvey);
    res.status(201).json(newSurvey);
});

// Update an existing survey
app.put('/surveys/:id', (req, res) => {
    const surveyId = req.params.id;
    const updatedSurvey = req.body;

    surveys = surveys.map((survey) => {
        if (survey.id === parseInt(surveyId)) {
            return { ...survey, ...updatedSurvey };
        }
        return survey;
    });

    res.json(updatedSurvey);
});

// Delete a survey by ID
app.delete('/surveys/:id', (req, res) => {
    const surveyId = req.params.id;

    surveys = surveys.filter((survey) => survey.id !== parseInt(surveyId));

    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
