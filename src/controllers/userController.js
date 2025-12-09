const User = require('../models/User');

module.exports = {
  async create(req, res) {
    try {
      const { name, email, phone } = req.body;
      const user = await User.create({ name, email, phone });
      return res.status(201).json(user);
    } catch (err) {
      console.error(err);
      return res.status(400).json({ error: err.message });
    }
  },

  async list(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err.message });
    }
  },

  async get(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) return res.status(404).json({ error: 'User not found' });
      return res.json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name, email, phone } = req.body;
      const user = await User.findByPk(id);
      if (!user) return res.status(404).json({ error: 'User not found' });

      await user.update({ name, email, phone });
      return res.json(user);
    } catch (err) {
      console.error(err);
      return res.status(400).json({ error: err.message });
    }
  },

  async remove(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) return res.status(404).json({ error: 'User not found' });

      await user.destroy();
      return res.json({ message: 'Deleted' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: err.message });
    }
  }
};
