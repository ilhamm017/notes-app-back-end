console.log("test bang");
const routes = require("./routes");
const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    port:4000,
    host: "localhost",
    routes: {
      cors: {
        origin: ['http://notesapp-v1.dicodingacademy.com'],
        headers: ['Authorization', 'Content-Type'],
        additionalHeaders: ['X-Requested-With']
      }
    }
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
