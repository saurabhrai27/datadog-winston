const DATADOG_API_KEY = ''
const APPLICATION_NAME =''

const httpTransportOptions = {
    host: 'http-intake.logs.datadoghq.com',
    path: `/api/v2/logs?dd-api-key=${DATADOG_API_KEY}&ddsource=nodejs&service=${APPLICATION_NAME}`,
    ssl: true
  };
  
  export default logger = createLogger({
    level: 'info',
    exitOnError: false,
    format: format.json(),
    transports: [
        new transports.Console(),
      new transports.Http(httpTransportOptions),
    ],
  });
