import supertest from 'supertest';
import { app } from '../helper';

test(`Get Index`, async () => {
  const users = await supertest(app.server)
    .get(`/`)
    .set(`Accept`, `application/json`)
    .expect(`Content-Type`, /json/)
    .expect(200);

  expect(users.body).toHaveProperty(`messages`);
  expect(users.body).toHaveProperty(`status`);
  expect(users.body).toHaveProperty(`data`);
});

test(`Get Index`, async () => {
  const users = await supertest(app.server)
    .post(`/`)
    .send({
      messages: `Hello Lele`,
    })
    .set(`Accept`, `application/json`)
    .expect(`Content-Type`, /json/)
    .expect(200);

  expect(users.body).toHaveProperty(`messages`);
  expect(users.body).toHaveProperty(`status`);
  expect(users.body).toHaveProperty(`data`);
});

test(`Post Index`, async () => {
  await supertest(app.server)
    .post(`/`)
    .set(`Accept`, `application/json`)
    .expect(`Content-Type`, /json/)
    .expect(400);
});
