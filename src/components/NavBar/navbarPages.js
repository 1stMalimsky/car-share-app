import ROUTES from "../../routes/ROUTES";

// access to all
const pages = [
    {
        label: "HOME",
        url: ROUTES.HOME,
    },
    {
        label: "ABOUT",
        url: ROUTES.ABOUT,
    },
];
//not logged in users
const notAuthPages = [
    {
        label: "REGISTER",
        url: ROUTES.REGISTER,
    },
    {
        label: "LOGIN",
        url: ROUTES.LOGIN,
    },
];
//logged in users
const loggedInPages = [
    {
        label: "RENT A CAR",
        url: ROUTES.ADDCAR,
    },
    {
        label: "LOGOUT",
        url: ROUTES.LOGOUT,
    },
];
//biz pages
const bizPages = [
    {
        label: "MY CARS",
        url: ROUTES.MYCARS,
    },
    {
        label: "ADD NEW CAR",
        url: ROUTES.ADDCAR
    }
];
//admin pages
const adminPages = [
    {
        label: "SITE CARS",
        url: ROUTES.SITECARS,
    },
];

export { pages, adminPages, bizPages, loggedInPages, notAuthPages };