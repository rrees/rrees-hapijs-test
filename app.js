'use strict';

const ENV = process.env.ENV || "DEV";

const Hapi = require('@hapi/hapi');

const PORT = process.env.PORT || 3000;

const serverOptions = {
        port: PORT,
        host: '0.0.0.0',
    };

if(ENV === "DEV") {
	serverOptions.host = 'localhost';
}

const init = async () => {

    const server = Hapi.server(serverOptions);

    server.route({
        method: 'GET',
        path:'/',
        handler: (request, h) => {

            return 'Hello World!';
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();

