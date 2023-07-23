/* eslint-disable no-console */

const exe = require("execa");
const fs = require("fs");
(async () => {
	try {
		await exe("git", ["checkout","--orphan","gh-pages"]);
		// eslint-disable-next-line no-console
		console.log("Building has begun");
		await exe("npm", ["run", "build"]);
		// take note if its a dist or build folder (if so we should add it in the building. This may be for later)
		const fName = fs.existsSync("dist") ? "dist" : "build";
		await exe("git", ["--work-tree", fName, "add", "--all"]);
		await exe("git", ["--work-tree", fName, "commit", "-m", "github pages push"]);
		console.log("Building Complete. \nPushing to cubixdev.org");
		await exe("git", ["push", "origin", "HEAD:gh-pages", "--force"]); // force pushing usually breaks stuff so as we continue development maybe lets ...not do that?
		await exe("rm", ["-r", fName]);
		await exe("git", ["checkout", "-f", "master"]); //master will be the main branch anyways. Politics be damned
		console.log("Pushed to cubixdev.org")
	} catch(e) { 
		// catch any issues during building and DONT PUSH <-- VERY IMPORANT
		console.log(e.message);
		process.exit(1)
	}
})
