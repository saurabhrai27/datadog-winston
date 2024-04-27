import dotenv from 'dotenv';
dotenv.config();

const ENV = process.env.ENV || 'DEV';

export const getEnv = () => {
    return ENV;
};

export const getLogLevel = () => {
    return process.env.LOG_LEVEL || 'info';
};

export const getDataDogAppKey = () => {
    return process.env[`DATADOG_APP_KEY_${ENV}`] || '';
};

export const getDataDogApiKey = () => {
    return process.env[`DATADOG_API_KEY_${ENV}`] || '';
};

export const getApplicationName = () => {
    return `${process.env.APPLICATION_NAME || ''}_${ENV}`;
};

export const getLogHostName = () => {
    if (ENV === 'PROD' || ENV === 'QA') {
        return `cloud_${ENV}`;
    }

    if (ENV === 'DEV') {
        return `localhost_${ENV}`;
    }

    return 'localhost';
};

export const getEnableLogs = () => {
    if (process.env.DATADOG_ENABLED_LOGS === 'true') {
        return true;
    }
    return false;
};
