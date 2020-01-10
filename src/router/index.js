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
import Workshops from "../views/Workshops.vue"
import MenuBackoffice from "../views/BackofficeMenu.vue";
import UserBackoffice from "../views/userBackOffice.vue"
import WorkshopBackoffice from "../views/workshopBackoffice.vue"



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/InicialPage",
    name: "inicialPage",
    component: InicialPage
  },
  {
    path: "/eventsReserv",
    name: "eventsReserv",
    component: EventsReserv
  },

  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/events",
    name: "events",
    component: Events
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
  },
  {
    path: "/profile/editProfile",
    name: "editProfile",
    component: EditProfile
  },
  {
    path: "/rentRoom",
    name: "rentRoom",
    component: RentRoom
  },
  {
    path: "/reservation/events",
    name: "events",
    component: EventsReserv
  },
  {
    path: "/room",
    name: "room",
    component: Room
  },
  {
    path: "/workshops",
    name: "workshops",
    component: Workshops
  },

  {
    path: "/menuadmin",
    name: "menuadmin",
    component: MenuBackoffice
  },
  {
    path: "/usersadmin",
    name: "usersadmin",
    component: UserBackoffice
  },
  {
    path: "/workshopadmin",
    name: "workshopadmin",
    component: WorkshopBackoffice
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
