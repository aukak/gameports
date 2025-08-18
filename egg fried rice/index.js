const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

app.use((req, res, next) => {
	res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
	res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
	next();
});
app.use(express.static(path.join(__dirname, "public")));
app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
