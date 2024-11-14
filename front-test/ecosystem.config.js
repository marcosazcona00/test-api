export default {
  apps : [{
    name   : "app2",
    script : "nuxt",
    args   : "start",
    env: {
      PORT: 3000 // Cambia este número al puerto que prefieras
    }
  }]
};