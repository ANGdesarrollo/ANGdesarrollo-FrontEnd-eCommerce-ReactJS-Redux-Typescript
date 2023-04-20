let API;
const MODE = import.meta.env.MODE;
const DEVELOPMENT_URL = import.meta.env.VITE_APP_URL_DEVELOPMENT;
const PRODUCTION_URL = import.meta.env.VITE_APP_URL_PRODUCTION;

if (MODE === 'DEVELOPMENT') {
    API = DEVELOPMENT_URL;
} else {
    API = PRODUCTION_URL;
}

export const API_URL = API;
