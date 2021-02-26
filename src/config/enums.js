status = {
    DISABLE: 'disable',
    ENABLE: 'enable',
}

roles = {
    ADMIN: 'admin',
    BLOGGER: 'blogger',
    USER: 'user',
}

permission = {
    // admin
    GET_USERS: 'getUsers',
    MANAGE_USERS: 'manageUsers',
    CAHNGE_STATUS_POST: 'changeStatusPost',

    // bloger
    GET_POSTS: 'getPosts',
    MANAGE_POSTS: 'managePosts',
}

module.exports = {
    status,
    roles,
    permission,
}