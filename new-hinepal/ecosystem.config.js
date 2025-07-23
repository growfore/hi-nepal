module.exports = {
  apps: [
    {
      name: "hinepaltreks", // Name of your app
      script: "npm", // Runs npm start
      args: "start",
      cwd: "/root/sailess/hinepal/frontend", // Update this to your actual Next.js project path
      env: {
        NODE_ENV: "production",
        PORT: 4016,
      },
    },
  ],
};
