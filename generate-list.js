const fs = require("fs");
const path = require("path");

const videosFolder = path.join(__dirname, "videos");
const outputFile = path.join(__dirname, "videos.json");

const supportedExtensions = [".mp4", ".mov", ".webm", ".m4v"];

try {
    const files = fs.readdirSync(videosFolder);

    const videos = files
        .filter(file =>
            supportedExtensions.includes(
                path.extname(file).toLowerCase()
            )
        )
        .sort((a, b) =>
            a.localeCompare(b, undefined, {
                numeric: true,
                sensitivity: "base"
            })
        );

    fs.writeFileSync(
        outputFile,
        JSON.stringify(videos, null, 2),
        "utf8"
    );

    console.log(`Created videos.json with ${videos.length} videos.`);
} catch (error) {
    console.error("Could not create the video list:", error.message);
}