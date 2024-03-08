import { Container } from 'typedi';
import LoggerInstance from './logger';
import { CronHandler } from '@/services/cronhandler';

export default () => {
    try {
        const cronhandlerInstance = new CronHandler('*/10 * * * * *', function () {
            const d = new Date();
            LoggerInstance.info('cron job is called :', d);
        });

        Container.set('cronHandler', cronhandlerInstance);
        Container.set('logger', LoggerInstance);
    } catch (e) {
        LoggerInstance.error('🔥 Error on dependency injector loader: %o', e);
        throw e;
    }
};