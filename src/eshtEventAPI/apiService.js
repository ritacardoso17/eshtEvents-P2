import API_URL from './config.js'

const apiService = {
    async addUser(name, school, email, password, contact, birth, imgProfile) {
        const response = await fetch(`${API_URL}/register`, {
            method: "POST",
            body: JSON.stringify({ name:name, pass:password, img:imgProfile, data:birth, telemovel:contact, idE:school, email:email, })
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
    async addMenu(name, img, type, components) {
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
    }
}

export default apiService