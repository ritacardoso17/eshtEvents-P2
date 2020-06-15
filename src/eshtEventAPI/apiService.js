import API_URL from './config.js'

const apiService = {
    async addUser(name, school, email, password, contact,birth, imgProfile ) {
        const response = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({ name: name, pass: password, img: imgProfile, data: birth, telemovel: contact, idE: school, email: email, })
        })

        if (response.ok) {
            return response.json()
        }
        else {
            throw Error(response)
        }
    },
    async getSchools() {
        const response = await fetch(`${API_URL}/schools`, {
            method: "GET",
        })

        if (response.ok) {
            return response.json()
        }
        else {
            throw Error(response)
        }
    },
    //obter menus
    async getMenus() {
        const response = await fetch(`${API_URL}/menus`, {
            method: "GET",
        })

        if (response.ok) {
            return response.json()
        }
        else {
            throw Error(response)
        }
    },
    //obter componentes dos menus
    async getComponents() {
        const response = await fetch(`${API_URL}/components`, {
            method: "GET",
        })

        if (response.ok) {
            return response.json()
        }
        else {
            throw Error(response)
        }
    },
    async getEventypes() {
        const response = await fetch(`${API_URL}/evenTypes`, {
            method: "GET",
        })

        if (response.ok) {
            return response.json()
        }
        else {
            throw Error(response)
        }
    },
    async getUsersEvents(id) {
        const response = await fetch(`${API_URL}/reservations/${id}`, {
            method: "GET"
        })

        if (response.ok) {
            return response.json()
        }
        else {
            throw Error(response)
        }
    },
    async getWorkshops() {
        const response = await fetch(`${API_URL}/workshops`, {
            method: "GET",
        })

        if (response.ok) {
            return response.json()
        }
        else {
            throw Error(response)
        }
    },
    async addMenus(name, img, type, components) {
        const response = await fetch(`${API_URL}/menus`, {
            method: "POST",
            body: JSON.stringify({ description: name, file: img, id_tipo_reserva: type, components: components })
        })

        if (response.ok) {
            return response.json()
        }
        else {
            throw Error(response)
        }
    },

    //LOGIN
    async login(email, password) {
        const response = await fetch(`${API_URL}/login `, {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({ pass: password,email: email})
        })

        if (response.ok) {
            return response.json()
        }
        else {
         
            throw Error(response)
        }
    },
    async logout(token) {
        const response = await fetch(`${API_URL}/logout `, {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=utf-8',
                'x-access-token': token
            }
        })

        if (response.ok) {
            return response.json()
        }
        else {
         
            throw Error(response)
        }
    }

}

export default apiService