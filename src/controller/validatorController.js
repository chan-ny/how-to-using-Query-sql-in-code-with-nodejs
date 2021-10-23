const { body, validationResult } = require("express-validator");

exports.checkValidator = [
  body("email").isEmail().normalizeEmail().withMessage("input email again"),
  body("password").isLength({ min: 5 }).withMessage("input password again"),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    res.status(200).json({
      success: true,
      message: "check validation ok",
    });
  },
];
