module.exports = {
  apps : [{
    name   : "app2",
    script : "nuxt",
    args   : "start", // Usa "start" en lugar de "dev" para producción
    env: {
      PORT: 3000 // Cambia este número al puerto que prefieras
    }
  }]
}