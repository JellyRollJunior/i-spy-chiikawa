const SERVER_URL = 'https://i-spy-chiikawa.onrender.com';

const getUrl = (endpoint) => {
    return `${SERVER_URL}${endpoint}`;
};

export { getUrl };
