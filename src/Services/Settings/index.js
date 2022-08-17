const settingRepo = require('../../Controller/Token');

const get = async userId => settingRepo.get(userId);

const upsert = async (userId, statistic) =>
  settingRepo.upsert(userId, { ...statistic, userId });

const remove = async userId => settingRepo.remove(userId);

module.exports = { get, upsert, remove };
