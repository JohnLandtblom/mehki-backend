const User = require("./schemas/userScheme");

exports.register = async (req, res) => {
  const newUser = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });
  try {
    if (!newUser) {
      return res.status(401).json({
        status: "Please enter your email and password!",
      });
    }
  } catch (err) {
    console.log(err);
  }
  res.status(201).json({
    status: "success",
    data: {
      user: newUser,
    },
  });
};

exports.login = async (req, res) => {
  const { email, password } = await req.body;

  if (!email || !password) {
    res.sendStatus(401).json({
      status: "Failed",
      message: "Please enter your email and password!",
    });
    return;
  } else {
    res.sendStatus(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  }
};
