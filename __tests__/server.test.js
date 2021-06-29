'use strict';

const server = require('../src/server.js');
const superTest = require('supertest');
const request = superTest(server.server);

describe('Server Module', () => {
  it('404 on a bad route', async () => {
    let response = await request.get('/not-found-route');
    expect(response.status).toEqual(404);
  });
  it('404 on a bad method', async () => {
    let response = await request.post('/route');
    expect(response.status).toEqual(404);
  });
});

describe('Food api server', () => {
  let id;
  it('should create a new food using post request', async () => {
    
    let food = {
      main: 'salad',
      soup: 'Beef',
    };
   
    const response = await request.post('/api/v1/food').send(food);
    
    expect(response.status).toEqual(201);
    expect(response.body.data.main).toEqual('salad');
    expect(response.body.data.soup).toEqual('Beef');
    expect(response.body.id.length).toBeGreaterThan(0);

    id = response.body.id;
  });

  it('should read all food using get request', async () => {
    
    let food = {
      main: 'salad',
      soup: 'Beef',
    };
   
    const response = await request.get('/api/v1/food').send(food);
    
    console.log('Body: ', response.body);
    expect(response.status).toEqual(200);
    expect(response.body[0].data.main).toEqual('salad');
    expect(response.body[0].data.soup).toEqual('Beef');
    expect(response.body[0].id.length).toBeGreaterThan(0);
  });

  it('should read food with id using get request', async () => {
    
    let food = {
      main: 'salad',
      soup: 'Beef',
    };
   
    const response = await request.get(`/api/v1/food/${id}`).send(food);
    
    console.log('Body: ', response.body);
    expect(response.status).toEqual(200);
    expect(response.body.data.main).toEqual('salad');
    expect(response.body.data.soup).toEqual('Beef');
    expect(response.body.id.length).toBeGreaterThan(0);
  });

  it('should update food using put request', async () => {
    
    let editFood = {
      main: 'salad',
      soup: 'Meat',
    };
   
    const response = await request.put(`/api/v1/food/${id}`).send(editFood);
    
    expect(response.status).toEqual(200);
    expect(response.body.data.soup).toEqual('Meat');
  });

  it('should delete food with id using delete request', async () => {
    
    let deleteFood = {
      main: 'salad',
      soup: 'Meat',
    };
   
    const response = await request
      .delete(`/api/v1/food/${id}`)
      .send(deleteFood);
    
    expect(response.status).toEqual(200);
    expect(response.body).toEqual([]);
  });
});

describe('Clothes api server', () => {
  let id;
  it('should create a new clothes using post request', async () => {
    
    let clothes = {
      Top: 'T-Shirt',
      Bottom: 'Blue jeans',
    };
   
    const response = await request.post('/api/v1/clothes').send(clothes);
    
    expect(response.status).toEqual(201);
    expect(response.body.data.Top).toEqual('T-Shirt');
    expect(response.body.data.Bottom).toEqual('Blue jeans');
    expect(response.body.id.length).toBeGreaterThan(0);

    id = response.body.id;
  });

  it('should read all clothes using get request', async () => {
    
    let clothes = {
      Top: 'T-Shirt',
      Bottom: 'Blue jeans',
    };
   
    const response = await request.get('/api/v1/clothes').send(clothes);
    
    console.log('Body: ', response.body);
    expect(response.status).toEqual(200);
    expect(response.body[0].data.Top).toEqual('T-Shirt');
    expect(response.body[0].data.Bottom).toEqual('Blue jeans');
    expect(response.body[0].id.length).toBeGreaterThan(0);
  });

  it('should read clothes with id using get request', async () => {
    
    let clothes = {
      Top: 'T-Shirt',
      Bottom: 'Blue jeans',
    };
   
    const response = await request.get(`/api/v1/clothes/${id}`).send(clothes);
    
    console.log('Body: ', response.body);
    expect(response.status).toEqual(200);
    expect(response.body.data.Top).toEqual('T-Shirt');
    expect(response.body.data.Bottom).toEqual('Blue jeans');
    expect(response.body.id.length).toBeGreaterThan(0);
  });

  it('should update clothes using put request', async () => {
    
    let editClothes = {
      Top: 'T-Shirt',
      Bottom: 'Black jeans',
    };
   
    const response = await request
      .put(`/api/v1/clothes/${id}`)
      .send(editClothes);
    
    expect(response.status).toEqual(200);
    expect(response.body.data.Bottom).toEqual('Black jeans');
  });

  it('should delete clothes with id using delete request', async () => {
    
    let deleteClothes = {
      Top: 'T-Shirt',
      Bottom: 'Meat',
    };
   
    const response = await request
      .delete(`/api/v1/clothes/${id}`)
      .send(deleteClothes);
    
    expect(response.status).toEqual(200);
    expect(response.body).toEqual([]);
  });
});
