module.exports = {
  apps: [
    {
      name: 'api.hinepaltreks', // Name of your application
      script: 'dist/main.js', // Entry point of your NestJS app
      instances: 'min', // Use minimum available CPU cores
      autorestart: true, // Automatically restart the app if it crashes
      watch: false, // Disable watching file changes
      max_memory_restart: '1G', // Restart the app if it exceeds 1GB of memory
      env: {
        NODE_ENV: 'production', // Environment variables
        PORT: 4009, // Port on which your app runs
      },
    },
  ],
};
