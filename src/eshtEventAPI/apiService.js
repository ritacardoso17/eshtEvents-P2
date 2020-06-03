import API_URL from './config.js'

const apiService = {
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
    async getComponents(){
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
    async getEventypes(){
        const response = await fetch(`${API_URL}/evenTypes`, {
            method: "GET",
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