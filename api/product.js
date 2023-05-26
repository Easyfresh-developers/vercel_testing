const express = require("express");
const router = express.Router();

/**
 * GET product list.
 *
 * @return product list | empty.
 */

module.exports = (req, res) => {
  console.log("reached to api for the first time");
  try {
    res.send({
      status: 200,
      message: "Get data has successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
};
// router.get("/", async
// });

// module.exports = router;
