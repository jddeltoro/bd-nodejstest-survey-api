const express = require('express');
const bodyParser = require('body-parser');

const app = express();

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

app.get('/surveys', (req, res) => {
    res.json(surveys);
});

app.post('/surveys', (req, res) => {
    const newSurvey = req.body;
    surveys.push(newSurvey);
    res.status(201).json(newSurvey);
});

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

app.delete('/surveys/:id', (req, res) => {
    const surveyId = req.params.id;

    surveys = surveys.filter((survey) => survey.id !== parseInt(surveyId));

    res.status(204).send();
});

module.exports = app;
