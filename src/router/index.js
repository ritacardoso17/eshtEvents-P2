import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Menu from "../views/Menu.vue";
import Room from "../views/Room.vue";
import Register from "../views/Register.vue";
import Profile from "../views/Profile.vue";
import EventsProfile from "../views/EventsProfile.vue";
import RoomProfile from "../views/RoomProfile.vue";
import EditProfile from "../views/EditProfile.vue";
import Reservation from "../views/Reservation.vue";
import EventsReserv from "../views/EventsReserv.vue";
import Information from "../views/Information.vue";
import MenuReserv from "../views/MenuReserv.vue";
import Components from "../views/Components.vue";
import Extra from "../views/Extra.vue";
import Summary from "../views/Summary.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/menu",
    name: "menu",
    component: Menu
  },
  {
    path: "/room",
    name: "room",
    component: Room
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
    path: "/profile/eventsProfile",
    name: "eventsProfile",
    component: EventsProfile
  },
  {
    path: "/profile/roomProfile",
    name: "roomProfile",
    component: RoomProfile
  },
  {
    path: "/profile/editProfile",
    name: "editProfile",
    component: EditProfile
  },
  {
    path: "/reservation",
    name: "reservation",
    component: Reservation
  },
  {
    path: "/reservation/events",
    name: "events",
    component: EventsReserv
  },
  {
    path: "/reservation/information",
    name: "information",
    component: Information
  },
  {
    path: "/reservation/menu",
    name: "menuReserv",
    component: MenuReserv
  },
  {
    path: "/reservation/components",
    name: "components",
    component: Components
  },
  {
    path: "/reservation/extra",
    name: "extra",
    component: Extra
  },
  {
    path: "/reservation/summary",
    name: "summary",
    component: Summary
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
