<<<<<<< HEAD
const DOMAIN_HOST = `/Git_tutorial`;
=======
const DOMAIN_HOST = `https://leeyang19970916.github.io/Git_tutorial`;
>>>>>>> master
const LOCAL_HOST = ``;

// 判斷當前是否在本地運行
const isLocal = window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost';
const basePath = isLocal ? LOCAL_HOST : DOMAIN_HOST;

export default basePath;
