/** Generate a random ID 19 characters long */

export const randomUID = () => Date.now().toString(36) + Math.random().toString(36).substr(2);
