const { tower ,time} = require("../services/taskServices");

class taskController {
  tower(req, res) {
    const array = req.body.array;
    const { water, errorTower } = tower(array);
    if (errorTower) return res.status(400).json({ message: errorTower });
    res.status(200).json(water);
  }

  time(req, res) {
    const seconds = req.body.seconds;
    const { message, errorSeconds } = time(seconds);
    if (errorSeconds) return res.status(400).json({ message: errorSeconds });
    res.status(200).json(message);
  }
}

module.exports = new taskController();
