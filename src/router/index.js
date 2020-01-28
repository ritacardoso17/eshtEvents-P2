import Vue from "vue";
import VueRouter from "vue-router";

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
    component: () => import("../views/EventsReserv.vue")
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
    component: () => import("../views/EditProfile.vue")
  },
  {
    path: "/rentRoom",
    name: "rentRoom",
    component: () => import("../views/RentRoom.vue")
  },
  {
    path: "/room",
    name: "room",
    component: () => import("../views/Room.vue")
  },
  {
    path: "/workshops",
    name: "workshops",
    component: () => import("../views/Workshops.vue")
  },
  {
    path: "/menu",
    name: "menu",
    component: () => import("../views/Menu.vue")
  },
  {
    path: "/menuadmin",
    name: "menuadmin",
    component: () => import("../views/BackofficeMenu.vue"),
    beforeEnter(to,from,next){
      let userType = JSON.parse(localStorage.getItem("loggedUser"))
      if(userType && userType[0].userType ==  "admin"){
      next()
      }
      else{
        next("/notFound")
      }
    }
  },
  {
    path: "/usersadmin",
    name: "usersadmin",
    component: () => import("../views/userBackOffice.vue")
  },
  {
    path: "/workshopadmin",
    name: "workshopadmin",
    component: () => import("../views/workshopBackoffice.vue")
  },
  {
    path: "/notFound",
    name: "notFound",
    component: () => import("../views/notFound.vue")
  },
  {
    path: "/menusBackoffice",
    name: "menusBackoffice",
    component: () => import("../views/menusBackoffice.vue")
  },
  {
    path: "/reservationsBackoffice",
    name: "reservationsBackoffice",
    component: () => import("../views/reservationsBackoffice.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/addMenu",
    name: "addMenu",
    component: () => import("../views/addMenuBackoffice.vue")
  },
  {
    path: "/eventsBackoffice",
    name: "eventsBackoffice",
    component: () => import("../views/eventsBackoffice.vue")
  },
];

const router = new VueRouter({
  mode: "history",
   scrollBehavior() {
    return { x: 0, y: 0 }
  },
  base: process.env.BASE_URL,
  routes
});

export default router;
