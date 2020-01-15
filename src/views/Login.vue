<template>

    <div>
        <form v-on:submit.prevent="login()">


            <label for="txtEmailLogin" class="emailLogin">E-mail:</label>
            <input type="email" class="form-control" id="txtEmailLogin" placeholder="Insira o seu e-mail"
                v-model="email" required />



            <label for="txtPasswordLogin" class="passLogin">Palavra-Chave:</label>
            <input type="password" class="form-control" id="txtPasswordLogin" placeholder="Insira a sua palavra-chave"
                v-model="password" required />´




            <b-button type="submit" class="btn btn-primary float-right" id="btnLogin">Entrar</b-button>






            <router-link tag="a" id="join" :to="{ name: 'register' }">Ainda não estás registado? Junta-te a nós!
            </router-link>
        </form>
    </div>

</template>

<script>
    export default {
        data: () => ({
            email: "",
            password: ""
        }),
        created: function () {
            if (localStorage.getItem("users")) {
                this.$store.state.users = JSON.parse(localStorage.getItem("users"));
            }
            if (localStorage.getItem("loggedUser")) {
                this.$store.state.loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
            }
            localStorage.setItem("foodMenus", JSON.stringify(this.$store.state.foodMenus));
            localStorage.setItem("workshops", JSON.stringify(this.$store.state.workshops));



        },
        methods: {
            login() {
                this.$store.commit("LOGIN", {
                    email: this.email,
                    password: this.password
                });
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>