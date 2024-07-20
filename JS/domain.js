const DOMAIN_HOST = `https://leeyang19970916.github.io/Git_tutorial`;
const LOCAL_HOST = ``;

const isLocal = window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost';
const basePath = isLocal ? LOCAL_HOST : DOMAIN_HOST;

export default basePath;
