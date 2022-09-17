const User = require("./schemas/userSchema");

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
      user: newUser._id,
    },
  });
};

exports.login = async (req, res) => {
  const { email, password } = await req.body;

  if (!email || !password) {
    res.status(401).json({
      status: "Failed",
      message: "Please enter your email and password!",
    });
    return;
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await user.correctPassword(password, user.password))) {
    res
      .status(401)
      .json({ status: "failed", message: "Incorrect email or password" });
  } else {
    const userId = user._id;
    res.status(201).json({
      status: "success",
      message: "Login succes",
      userId,
    });
    console.log(userId);
  }
};
