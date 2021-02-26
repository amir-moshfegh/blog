const { roles, permission } = require('./enums');

const roleRights = new Map();
roleRights.set(roles.ADMIN, [
  permission.GET_USERS,
  permission.MANAGE_USERS,
  permission.CAHNGE_STATUS_POST,
  permission.GET_POSTS,
  permission.MANAGE_POSTS,
]);
roleRights.set(roles.BLOGGER, [
  permission.GET_POSTS,
  permission.MANAGE_POSTS,
]);
roleRights.set(roles.USER, [
  permission.GET_POSTS,
]);

module.exports = {
  roles,
  roleRights,
};
