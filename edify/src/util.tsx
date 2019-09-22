export const isProduction
  = () => !process || !process.env || process.env.NODE_ENV !== 'development';

export const isDevelopment = () => !isProduction();

// eslint-disable-next-line no-alert
export const handleUnexpectedError = (error: string) => alert(error);
