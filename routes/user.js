const express = require("express");
const User = require("../schemas/userSchema");
const router = express.Router();
const { register, login } = require("../controller");

/**
 * @openapi
 * /v0/users/{userId}:
 *  delete:
 *      description: Delete user
 *      parameters:
 *        - in: path
 *          name: userId
 *          schema:
 *              type: string
 *          required: true
 *          description: string id of user to delete
 *      responses:
 *          200:
 *              description: User that was deleted
 */

router.delete("/v0/users/{userId}", (req, res) => {
  let { id } = req.params;

  return res.json({ userId: id });
});

/**
 * @openapi
 * /v0/getUsers:
 *   get:
 *     description: Gets all users!
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

router.get("/v0/getUsers", (req, res) => {
  res.status(200).send({ status: "oki, all users found!" });
});

/**
 * @openapi
 * /v0/userUpdate:
 *  put:
 *    tags:
 *      - user
 *    summary: Update user
 *    description: This can only be done by the logged in user.
 *    operationId: updateUser
 *    parameters:
 *      - name: username
 *        in: path
 *        description: name that need to be deleted
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      default:
 *        description: successful operation
 *  delete:
 *    tags:
 *      - user
 */
router.put("/v0/userUpdate", (req, res) => {
  res.status(200).send({ status: "User succesfully updated! :)" });
});

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
router.patch("/update/:id", async function (req, res) {
  try {
    const user = await User.updateOne(
      { _id: req.params.id },
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password,
        },
      }
    );
    const updatedUser = await user.save();
    res.json({ message: "User Updated", user: updatedUser });
  } catch (err) {
    res.status(401).json({
      status: "no user found",
    });
  }
});

router.delete("/delete/:id", async function (req, res) {
  try {
    const user = await User.findById({ _id: req.params.id });
    if (user) {
      await user.remove();
      res.status(200).json({ message: "user deleted" });
    }
  } catch (e) {
    res.status(401).json({
      status: "no user found",
    });
  }
});

// router.post("/v0/register", (req, res) => {
//   res.status(200).send({ status: "User succesfully created! :)" });
// });

//router.post("/v0/signin", login);

module.exports = router;
