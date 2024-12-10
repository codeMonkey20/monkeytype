const express = require("express");
const router = express.Router();
const { PATH } = require("./constants");
const path = require("path");
const fs = require("fs");

router.get("/", (req, res) => res.sendFile("index.html", { root: PATH.PAGES }));

router.get("/api/words", (req, res) => {
	const { count, type, language } = req.query;
	let wordtype = "";
	try {
		switch (type) {
			case "easy":
				wordtype = "_1k";
				break;
			case "medium":
				wordtype = "_5k";
				break;
			case "hard":
				wordtype = "_10k";
				break;
			case "wow":
				wordtype = "_25k";
				break;
			case "quotes":
				wordtype = "_quotes";
				break;
			default:
				break;
		}
		const fileBuffer = fs.readFileSync(
			path.join(
				PATH.PUBLIC, "words", `${language ?? "english"}${wordtype}.json`),
				{ encoding: "utf8", }
			);
		var wordsMetadata = JSON.parse(fileBuffer);
	} catch (error) {
		return res.status(500).end();
	}

	if (type === "quotes") {
		let quoteMetaData = wordsMetadata.quotes[Math.floor(Math.random() * (7619 - 1 + 1)) + 1];
		while (!quoteMetaData) {
			quoteMetaData = wordsMetadata.quotes[Math.floor(Math.random() * (7619 - 1 + 1)) + 1];
		}
		return res.json(quoteMetaData);
	}
	else if (Array.isArray(wordsMetadata.words) && wordsMetadata.words.length > 0) {
		const shuffled = wordsMetadata.words;
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return res.json(shuffled.slice(0, parseInt(count) || 10));
	}

	return res.status(500).end();
});

router.get("/api/word", (req, res) => {
	const { lowerCase } = req.query;
	try {
		var wordsMetadata = JSON.parse(
			fs.readFileSync(
				path.join(PATH.PUBLIC, "words", "english_5k.json"),
				{
					encoding: "utf8",
				}
			)
		);
	} catch (error) {
		return res.status(500).end();
	}

	if (Array.isArray(wordsMetadata.words) && wordsMetadata.words.length > 0) {
		const words = wordsMetadata.words;
		if (lowerCase)
			return res.json(
				words[Math.floor(Math.random() * words.length) | 0]
					.toString()
					.toLowerCase()
			);
		return res.json(
			words[Math.floor(Math.random() * words.length) | 0].toString()
		);
	}

	return res.status(404).end();
});

module.exports = router;
