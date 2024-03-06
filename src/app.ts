import config from './config';
import express from 'express';
import Logger from './loaders/logger';

async function startServer() {
    const app = express();

    /**
     * A little hack here
     * Import/Export can only be used in 'top-level code'
     * Well, at least in node 10 without babel and at the time of writing
     * So we are using good old require.
     **/
    await require('./loaders').default({ expressApp: app });

    app.listen(config.port, () => {
        Logger.info(`
        ################################################
        🛡️  node_env : ${config.node_env} 🛡️
        🛡️  Server listening on port: ${config.port} 🛡️
        🛡️  log_dir : ${config.logs.dir} 🛡️
        ################################################
      `);
    }).on('error', err => {
        //   Logger.error(err);
        process.exit(1);
    });

}

startServer();