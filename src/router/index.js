import Vue from "vue";
import VueRouter from "vue-router";


import Home from "../views/Home.vue";
import InicialPage from "../views/InicialPage.vue"
import About from "../views/About.vue";
import Register from "../views/Register.vue";
import Profile from "../views/Profile.vue";
import Events from "../views/Events.vue";
import EditProfile from "../views/EditProfile.vue";
import RentRoom from "../views/RentRoom.vue";
import EventsReserv from "../views/EventsReserv.vue";
import Room from "../views/Room.vue";
import Workshops from "../views/Workshops.vue";
import MenuBackoffice from "../views/BackofficeMenu.vue";
import Menu from "../views/Menu.vue";
import UserBackoffice from "../views/userBackOffice.vue"
import WorkshopBackoffice from "../views/workshopBackoffice.vue"
import addWorkshop from "../views/addWorkshop.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/addWorkshop",
    name: "addWorkshop",
    component: () => import("../views/addWorkshop.vue")
  },
  {
    path: "/InicialPage",
    name: "inicialPage",
    component: () => import("../views/InicialPage.vue")
  },
  {
    path: "/eventsReserv",
    name: "eventsReserv",
    component:  () => import("../views/EventsReserv.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/events",
    name: "events",
    component: () => import("../views/Events.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue")
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/Profile.vue")
  },
  {
    path: "/profile/editProfile",
    name: "editProfile",
    component:  () => import("../views/EditProfile.vue")
  },
  {
    path: "/rentRoom",
    name: "rentRoom",
    component:  () => import("../views/RentRoom.vue")
  },
  {
    path: "/room",
    name: "room",
    component:  () => import("../views/Room.vue")
  },
  {
    path: "/workshops",
    name: "workshops",
    component:  () => import("../views/Workshops.vue")
  },
  {
    path: "/menu",
    name: "menu",
    component:  () => import("../views/Menu.vue")
  },
  {
    path: "/menuadmin",
    name: "menuadmin",
    component:  () => import("../views/BackofficeMenu.vue")
  },
  {
    path: "/usersadmin",
    name: "usersadmin",
    component: () => import("../views/userBackOffice.vue")
  },
  {
    path: "/workshopadmin",
    name: "workshopadmin",

    component: WorkshopBackoffice
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
