const request = require('supertest');

const app = require('../server');

describe('GET /surveys', () => {
    it('should return all surveys', async () => {
        const res = await request(app)
            .get('/surveys')
            .expect('Content-Type', /json/)
            .expect(200);
    
        expect(res.body).toEqual([
            { id: 1, title: 'Survey 1', questions: [{ id: 1, question: 'Question 1', type: 'text' }, { id: 2, question: 'Question 2', type: 'text' }] },
            { id: 2, title: 'Survey 2', questions: [{ id: 1, question: 'Question 1', type: 'text' }, { id: 2, question: 'Question 2', type: 'text' }] },
            { id: 3, title: 'Survey 3', questions: [{ id: 1, question: 'Question 1', type: 'text' }, { id: 2, question: 'Question 2', type: 'text' }] },
        ]);
    });
    
});

