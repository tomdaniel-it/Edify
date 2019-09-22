export const isProduction = () => !process || !process.env || process.env.NODE_ENV !== 'development';

export const isDevelopment = () => !isProduction();
