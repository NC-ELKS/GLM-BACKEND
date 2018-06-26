const ApiBuilder = require("claudia-api-builder"),
  api = new ApiBuilder();

module.exports = api;

api.get("/users", () => {
  return "hello-world";
});
