export const notReachable = (_: never): never => {
    console.error('should never be reached', _);
    throw new Error('should never be reached');
};