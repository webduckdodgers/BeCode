const express = require("express");
const app = express();
const port = 3000;

app.use((home = require("./routes/home")));

const voirClient = require("./routes/client/voir");
app.use("/client", voirClient);

const ajouterClient = require("./routes/client/ajouter");
app.use("/client", ajouterClient);

const modifierClient = require("./routes/client/modifier");
app.use("/client", modifierClient);

const supprimerClient = require("./routes/client/supprimer");
app.use("/client", supprimerClient);

app.listen(port, console.log(`serveur en route | PORT : ${port}`));
