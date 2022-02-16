module.exports = {
  apps: [
    {
      name: "wordle-list",
      script: "./server.ts",
      interpreter: "deno",
      interpreterArgs: "run --allow-net --allow-read",
    },
  ],
};
