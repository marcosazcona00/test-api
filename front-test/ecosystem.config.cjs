module.exports = {
  apps: [
    {
      name: "nuxt-app",
      script: "npm",
      args: "run start",
      cwd: "/home/ubuntu/test-api/front-test",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};