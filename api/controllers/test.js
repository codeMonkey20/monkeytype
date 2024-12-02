module.exports = {
	/**
	 *
	 * @param {import("express").Request} req
	 * @param {import("express").Response} res
	 */
	testing: (req, res) => {
		return res.end("hello");
	},
};
