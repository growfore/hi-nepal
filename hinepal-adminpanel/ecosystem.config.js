module.exports = {
  apps: [
    {
      name: 'admin.hinepaltreks', // Name of your app
      script: 'npm', // Runs npm start
      args: 'start',
      cwd: '/root/sailess/hinepal/adminpanel', // Update this to your actual Next.js project path
      env: {
        NODE_ENV: 'production',
        PORT: 4018,
      },
    },
  ],
};
