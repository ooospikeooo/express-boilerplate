import { Container } from 'typedi';
import LoggerInstance from './logger';
import { CronHandler } from '@/services/cronhandler';

export default () => {
    try {
        const cronhandlerInstance = new CronHandler('*/10 * * * * *', function () {
            const d = new Date();
            console.log('cron job is called :', d);
        });

        Container.set('cronHandler', cronhandlerInstance);
    } catch (e) {
        LoggerInstance.error('🔥 Error on dependency injector loader: %o', e);
        throw e;
    }
};