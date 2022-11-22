import * as pg from 'pg'
import {pool} from "../db/index.js";
import supertest from 'supertest';
import app from "../app.js";

afterAll(async function (){
    await pool.end();
})

test("get by week route response", async function(){

    const response = await supertest(app).get(`/api/links/1`)
    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual({
        success: true,
        payload : expect.any(Array)});

        const userObject = response.body.payload
        for (let i=0; i<response.body.payload.length; i++) {
        expect (userObject[i]).toStrictEqual({
                link_id: expect.any(Number),
                link: expect.any(String),
                title: expect.any(String),
                description: expect.any(String),
                week: 1,
                subject: expect.any(String),
                subject_id: expect.any(Number),
                icon: expect.any(String)
             })
    }
});

test("get by week route response", async function(){

    const response = await supertest(app).get(`/api/links?subject=React`)
    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual({
        success: true,
        payload : expect.any(Array)});

        const userObject = response.body.payload
        for (let i=0; i<response.body.payload.length; i++) {
        expect (userObject[i]).toStrictEqual({
                link_id: expect.any(Number),
                link: expect.any(String),
                title: expect.any(String),
                description: expect.any(String),
                week: expect.any(Number),
                subject: "React",
                subject_id: 4,
                icon: expect.any(String)
             })
    }
})