import ROUTES from "../../routes/ROUTES";

// access to all
const pages = [
    {
        label: "HOME",
        url: ROUTES.HOME,
    },
    {
        label: "ABOUT US",
        url: ROUTES.ABOUT,
    },
    {
        label: "OUR CARS",
        url: ROUTES.OURCARS
    }
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
        label: "LIKED CARS",
        url: ROUTES.LIKEDCARS,
    },
    {
        label: "MY CARS",
        url: ROUTES.MYCARS,
    },
    {
        label: "LOGOUT",
        url: ROUTES.LOGOUT,
    },
];

//admin pages
const adminPages = [
    {
        label: "MY CONTROLS",
        url: ROUTES.ADMIN
    }
];

export { pages, adminPages, loggedInPages, notAuthPages };