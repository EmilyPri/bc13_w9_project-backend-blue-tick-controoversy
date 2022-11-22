import * as pg from 'pg'
import {pool} from "../db/index.js";
import supertest from 'supertest';
import app from "../app.js";

afterAll(async function (){
    await pool.end();
})