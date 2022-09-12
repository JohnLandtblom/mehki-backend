const express = require("express");
const router = express.Router();
const { register, login } = require("../controller");

/**
 * @openapi
 * /v0/register:
 *   delete:
 *     summary: Update an existing user
 *     description: Deletes a user!
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *                 description: The user's firstname.
 *                 example: Jon
 *               lastname:
 *                 type: string
 *                 description: The user's lastname.
 *                 example: Doe
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: secret
 *               confirmpassword:
 *                 type: string
 *                 description: To confirm user's password have to match password.
 *                 example: secret
 *               email:
 *                 type: string
 *                 description: The user's email.
 *                 example: jon.doe@some.where
 *     responses:
 *       200:
 *         description: Deletes a user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The user ID.
 *                       example: 1
 *                     name:
 *                       type: string
 *                       description: The user's name.
 *                       example: Jone Doe
 *                     email:
 *                       type: string
 *                       description: The user's name.
 *                       example: Jone Doe
 */
router.delete("/v0/register", register);
/**
 * @openapi
 * /v0/register:
 *   get:
 *     description: Gets all users!
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *                 description: The user's firstname.
 *                 example: Jon
 *               lastname:
 *                 type: string
 *                 description: The user's lastname.
 *                 example: Doe
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: secret
 *               confirmpassword:
 *                 type: string
 *                 description: To confirm user's password have to match password.
 *                 example: secret
 *               email:
 *                 type: string
 *                 description: The user's email.
 *                 example: jon.doe@some.where
 *     responses:
 *       200:
 *         description: Gets all user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The user ID.
 *                       example: 1
 *                     name:
 *                       type: string
 *                       description: The user's name.
 *                       example: Jone Doe
 *                     email:
 *                       type: string
 *                       description: The user's name.
 *                       example: Jone Doe
 */
router.get("/v0/register", register);
/**
 * @openapi
 * /v0/register:
 *   put:
 *     summary: Update an existing user
 *     description: Changes a user!
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *                 description: The user's firstname.
 *                 example: Jon
 *               lastname:
 *                 type: string
 *                 description: The user's lastname.
 *                 example: Doe
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: secret
 *               confirmpassword:
 *                 type: string
 *                 description: To confirm user's password have to match password.
 *                 example: secret
 *               email:
 *                 type: string
 *                 description: The user's email.
 *                 example: jon.doe@some.where
 *     responses:
 *       200:
 *         description: Changes a user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The user ID.
 *                       example: 1
 *                     name:
 *                       type: string
 *                       description: The user's name.
 *                       example: Jone Doe
 *                     email:
 *                       type: string
 *                       description: The user's name.
 *                       example: Jone Doe
 */
router.put("/v0/register", register);
/**
 * @openapi
 * /v0/register:
 *   post:
 *     summary: Create a new user
 *     description: Creates a user!
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *                 description: The user's firstname.
 *                 example: Jon
 *               lastname:
 *                 type: string
 *                 description: The user's lastname.
 *                 example: Doe
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: secret
 *               confirmpassword:
 *                 type: string
 *                 description: To confirm user's password have to match password.
 *                 example: secret
 *               email:
 *                 type: string
 *                 description: The user's email.
 *                 example: jon.doe@some.where
 *     responses:
 *       200:
 *         description: Creates a user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The user ID.
 *                       example: 1
 *                     name:
 *                       type: string
 *                       description: The user's name.
 *                       example: Jone Doe
 *                     email:
 *                       type: string
 *                       description: The user's name.
 *                       example: Jone Doe
 */
router.post("/v0/register", register);
router.post("/v0/signin", login);

module.exports = router;
