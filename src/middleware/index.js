// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  // Add your custom middleware here. Remember that
  // in Express, the order matters.
  app.get("/test", (req, res) => {
    res.send("test route");
  });

  app.post("/signup", (req, res) => {
    res.json(req.body);
  });
};
