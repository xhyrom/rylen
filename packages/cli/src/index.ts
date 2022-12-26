import build from "./commands/build";

(async() => {
    await build(process.argv.slice(2)[0], true);
})();