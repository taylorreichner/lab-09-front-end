import request from 'superagent';

const URL = 'https://quiet-peak-65283.herokuapp.com';

export async function getQuarterbacks() {
    const response = await request.get(`${URL}/quarterbacks`);

    return response.body;
}
export async function getStyles() {
    
    const { body } = await request.get(`${URL}/styles`);

    return body;
}

export async function getQuarterback(id) {
    const { body } = await request.get(`${URL}/quarterbacks/${id}`);
    return body;
}
export async function makeQuarterback(newQuarterback) {
    const { body } = await request
        .post(`${URL}/quarterbacks/`)
        .send(newQuarterback);

     return body;
}

export async function deleteQuarterback(id) {
    const { body } = await request.delete(`${URL}/quarterbacks/${id}`);

    return body;
}

export async function updateQuarterback(id, newQuarterback) {
    const { body } = await request.put(`${URL}/quarterbacks/${id}`)
        .send(newQuarterback);
        return body;
} 

export const getStyleId = (quarterback, styles) => styles.find(style => quarterback.style === style.name).id;