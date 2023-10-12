/**
 * @swagger
 * tags:
 *    name: Movies
 *    description: The movies managing API
 * /api/movies:
 *   post:
 *      summary: Create a new movie
 *      tags: [Movies]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movies'
 *      responses:
 *        200:
 *          description: The created movie.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Movies'
 *        500:
 *          description: Some server error
 * /api/movies/{id}:
 *   get:
 *      summary: Get the movie by id
 *      tags: [Movies]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: The movie by id
 *      responses:
 *        200:
 *          description: The movie created by id
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Movies'
 *        404:
 *          description: The movie was not found
 *   put:
 *      summary: Update the movie by id
 *      tags: [Movies]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: The movie by id
 *      requestBody:
 *          required: true
 *          content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Movies'
 *      responses:
 *        200:
 *          description: The movie was updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Movies'
 *        404:
 *          description: The movie was not found
 *        505:
 *          description: Some error happened
 *   delete:
 *      summary: Remove the movie by id
 *      tags: [Movies]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: The movie by id
 * 
 *      responses:
 *        200:
 *          description: The movie created by id
 *        404:
 *          description: The movie was not found
 */

const express = require('express')
const router = express.Router()

module.exports = router