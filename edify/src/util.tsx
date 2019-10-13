/* eslint-disable no-console */
export const isProduction
  = () => !process || !process.env || process.env.NODE_ENV !== 'development';

export const isDevelopment = () => !isProduction();

export const handleError
  = (error: Error, ...otherInfo: Array<any>) => console.error(error, ...otherInfo);

export const handleWarning
  = (warning: Error, ...otherInfo: Array<any>) => console.warn(warning, ...otherInfo);
