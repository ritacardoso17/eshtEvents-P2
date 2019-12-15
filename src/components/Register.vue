<template>
    <div id="registerForm">
            <div class="container col-sm-4">
            <h1 >Criar Conta</h1>
            <form v-on:submit.prevent="addUser()">
                <div class="form-group">
                    <label for="registerName">Nome:</label>
                    <input type="text" class="form-control" id="registerName" placeholder="Insira o seu nome" required
                        v-model="name">
                </div>
                <div class="form-group">
                    <label for="registerEmail">E-mail:</label>
                    <input type="email" class="form-control" id="registerEmail" aria-describedby="emailHelp"
                        placeholder="Enter email" required v-model="email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                        else.</small>
                </div>
                <div class="form-group">
                    <label for="registerPass">Password:</label>
                    <input type="password" class="form-control" id="registerPass" placeholder="Password" required
                        v-model="password">
                </div>
                <div class="form-group">
                    <label for="registerConfPass">Confirmar Password:</label>
                    <input type="password" class="form-control" id="registerConfPass"
                        placeholder="Confirme sua Password" required v-model="confPassword">
                </div>
                <button type="submit" class="btn btn-primary  float-right">Criar Conta</button>
                <button type="button" class="btn btn-link float-right">
                    <router-link to="/login">Login</router-link>
                </button>
            </form>
        </div> 
    </div>
</template>

<script>
export default {
    
}
</script>