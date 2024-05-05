const sha1 = require("sha1");

module.exports = {
  classNameSlug: function (hash, title, { name, dir }) {
    return sha1(`${name}-${dir}-${title}`).slice(0,8); // гыгык
  },
};
