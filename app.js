'use strict';

const Hapi = require('@hapi/hapi');

const PORT = process.env.PORT || 3000;

const serverOptions = {
        port: PORT,
    };

const init = async () => {

    const server = Hapi.server(serverOptions);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();

