import API_URL from "./config.js";

const apiService = {
  async addUser(name, school, email, password, contact, birth, imgProfile) {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        name: name,
        pass: password,
        img: imgProfile,
        data: birth,
        telemovel: contact,
        idE: school,
        email: email
      })
    });

    if (response.ok) {
      return response.json();
    } else {
      throw Error(response);
    }
  },
  async getSchools() {
    const response = await fetch(`${API_URL}/schools`, {
      method: "GET"
    });

    if (response.ok) {
      return response.json();
    } else {
      throw Error(response);
    }
  },
  async getRooms() {
    let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    const response = await fetch(`${API_URL}/rooms`, {
      method: "GET",
      headers: {
        "x-access-token": loggedUser.token
      }
    });

    if (response.ok) {
      return response.json();
    } else {
      throw Error(response);
    }
  },
  async getOpinionReservs(id, opinion) {
    let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    const response = await fetch(`${API_URL}/reservOpinions/${id}`, {
      method: "PUT",
      headers: {
        "x-access-token": loggedUser.token,
        "Content-type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({ opinion: opinion })
    });

    if (response.ok) {
      return response.json();
    } else {
      throw Error(response);
    }
  },
  async getOpinionRents(id, opinion) {
    let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    const response = await fetch(`${API_URL}/rentOpinions/${id}`, {
      method: "PUT",
      headers: {
        "x-access-token": loggedUser.token,
        "Content-type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({ opinion: opinion })
    });

    if (response.ok) {
      return response.json();
    } else {
      throw Error(response);
    }
  },
  async editUser(pass, oldPass, img) {
    let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    let id = loggedUser.user[0].id_utilizador;
    const response = await fetch(`${API_URL}/users/${id}`, {
      method: "PUT",
      headers: {
        "x-access-token": loggedUser.token,
        "Content-type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({ pass: pass, oldPass: oldPass, img: img })
    });

    if (response.ok) {
      return response.json();
    } else {
      throw Error(response);
    }
  },
  async editUserType( id) {
    let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    const response = await fetch(`${API_URL}/userType/${id}`, {
      method: "PUT",
      headers: {
        "x-access-token": loggedUser.token,
        "Content-type": "application/json; charset=utf-8"
      }
    });

    if (response.ok) {
      return response.json();
    } else {
      throw Error(response);
    }
  },
  async editUserTypeClient( id) {
    let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    const response = await fetch(`${API_URL}/userTypeC/${id}`, {
      method: "PUT",
      headers: {
        "x-access-token": loggedUser.token,
        "Content-type": "application/json; charset=utf-8"
      }
    });

    if (response.ok) {
      return response.json();
    } else {
      throw Error(response);
    }
  },
  async getExtras() {
    const response = await fetch(`${API_URL}/extras`, {
      method: "GET"
    });

    if (response.ok) {
      return response.json();
    } else {
      throw Error(response);
    }
  },
  async getUsers() {
    let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    const response = await fetch(`${API_URL}/users`, {
      method: "GET",
      headers: {
        "x-access-token": loggedUser.token,
        "Content-type": "application/json; charset=utf-8"
      },
    });

    if (response.ok) {
      return response.json();
    } else {
      throw Error(response);
    }
  },
  async getDecorations() {
    const response = await fetch(`${API_URL}/decorations`, {
      method: "GET"
    });

    if (response.ok) {
      return response.json();
    } else {
      throw Error(response);
    }
  },
  async getUniforms() {
    const response = await fetch(`${API_URL}/uniforms`, {
      method: "GET"
    });

    if (response.ok) {
      return response.json();
    } else {
      throw Error(response);
    }
  },
  async getStates() {
    const response = await fetch(`${API_URL}/state`, {
      method: "GET"
    });

    if (response.ok) {
      return response.json();
    } else {
      throw Error(response);
    }
  },
  //obter menus
  async getMenus() {
    const response = await fetch(`${API_URL}/menus`, {
      method: "GET"
    });

    if (response.ok) {
      return response.json();
    } else {
      throw Error(response);
    }
  },
  //obter componentes dos menus
  async getComponents() {
    const response = await fetch(`${API_URL}/components`, {
      method: "GET"
    });

    if (response.ok) {
      return response.json();
    } else {
      throw Error(response);
    }
  },
  async getEventypes() {
    const response = await fetch(`${API_URL}/evenTypes`, {
      method: "GET"
    });

    if (response.ok) {
      return response.json();
    } else {
      throw Error(response);
    }
  },
  async getEventypesId(id) {
    const response = await fetch(`${API_URL}/menuTypesById/${id}`, {
      method: "GET"
    });

    if (response.ok) {
      return response.json();
    } else {
      throw Error(response);
    }
  },
  async getUsersEvents(id) {
    const response = await fetch(`${API_URL}/reservations/${id}`, {
      method: "GET"
    });

    if (response.ok) {
      return response.json();
    } else {
      throw Error(response);
    }
  },
  async getUsersRents(id) {
    const response = await fetch(`${API_URL}/roomRents/${id}`, {
      method: "GET"
    });

    if (response.ok) {
      return response.json();
    } else {
      throw Error(response);
    }
  },
  async getWorkshops() {
    const response = await fetch(`${API_URL}/workshops`, {
      method: "GET"
    });

    if (response.ok) {
      return response.json();
    } else {
      throw Error(response);
    }
  },
  async addUserWorkshop(id_workshop) {
    let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    const response = await fetch(`${API_URL}/userWorkshops  `, {
      method: "POST",
      headers: {
        "x-access-token": loggedUser.token,
        "Content-type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({ id_user: loggedUser.user[0].id_utilizador, id_workshop: id_workshop })
    });

    if (response.ok) {
      return response.json();
    } else {
      throw Error(response);
    }
  },
  async removeReservation(id) {
    let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    const response = await fetch(`${API_URL}/reservations/${id}`, {
      method: "DELETE",
      headers: {
        "x-access-token": loggedUser.token
      }
    });

    if (response.ok) {
      return response.json();
    } else {
      throw Error(response);
    }
  }, async removeUser(id) {
    let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    const response = await fetch(`${API_URL}/users/${id}`, {
      method: "DELETE",
      headers: {
        "x-access-token": loggedUser.token
      }
    });

    if (response.ok) {
      return response.json();
    } else {
      throw Error(response);
    }
  },
  async removeRent(id) {
    let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    const response = await fetch(`${API_URL}/roomRents/${id}`, {
      method: "DELETE",
      headers: {
        "x-access-token": loggedUser.token
      }
    });
    if (response.ok) {
      return response.json();
    } else {
      throw Error(response);
    }
  },
  async addReservations(
    id_extra,
    n_people,
    dateTime_reserv,
    dateTime_event,
    id_uniform,
    id_evenType,
    id_menu,
    id_local,
    id_decoration,
    obs
  ) {
    let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    const response = await fetch(`${API_URL}/reservations`, {
      method: "POST",
      headers: {
        "x-access-token": loggedUser.token,
        "Content-type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        id_extra: id_extra,
        id_user: loggedUser.user[0].id_utilizador,
        n_people: n_people,
        date_reserv: dateTime_reserv,
        date_required: dateTime_event,
        id_uniform: id_uniform,
        id_reservType: id_evenType,
        id_menu: id_menu,
        id_local: id_local,
        id_decoration: id_decoration,
        obs: obs
      })
    });

    if (response.ok) {
      return response.json();
    } else {
      throw Error(response);
    }
  },

  async addMenus(name, img, type, components) {
    let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    const response = await fetch(`${API_URL}/menus`, {
      method: "POST",
      headers: {
        "x-access-token": loggedUser.token,
        "Content-type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        description: name,
        file: img,
        id_tipo_reserva: type,
        components: components
      })
    });

    if (response.ok) {
      return response.json();
    } else {
      throw Error(response);
    }
  },
  async addRents(id_room, date_required, duration, reason) {
    let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    const response = await fetch(`${API_URL}/roomRents`, {
      method: "POST",
      headers: {
        "x-access-token": loggedUser.token,
        "Content-type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        id_user: loggedUser.user[0].id_utilizador,
        date_required: date_required,
        duration: duration,
        id_room: id_room,
        reason: reason
      })
    });
    if (response.ok) {
      return response.json();
    } else {
      throw Error(response);
    }
  },
  //LOGIN
  async login(email, password) {
    const response = await fetch(`${API_URL}/login `, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({ pass: password, email: email })
    });

    if (response.ok) {
      return response.json();
    } else {
      throw Error(response);
    }
  },
  async logout(token) {
    const response = await fetch(`${API_URL}/logout `, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-access-token": token
      }
    });

    if (response.ok) {
      return response.json();
    } else {
      throw Error(response);
    }
  }
};

export default apiService;
