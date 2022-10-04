const itemControler = require("../controllers").Item;

module.exports = app => {
    app.get("/api", (req, res) =>
        res.status(200).send({
            message: "welcome to the API!"
        })
    );
    app.post("/api/item", itemControler.create)

    app.get("/api/item", itemControler.list)

    app.get("/api/item/:itemId", itemControler.retrieve)

    app.put("/api/item/:itemId", itemControler.update)

    app.delete("/api/item/:itemId", itemControler.delete)

}