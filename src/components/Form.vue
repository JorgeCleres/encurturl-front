<template>
    <div class="form">
        <div>
            <h1>Encurte a sua URL</h1>
            <input type="text" v-model="formurl.url" placeholder="Digite sua URL">
            <button @click="enviar">
                <span v-if="botao">Enviar</span>
                <b-spinner v-else label=""></b-spinner>
            </button>
            <a :href="response.url" target="_blank">
                <h2>{{response.url}}</h2>
            </a>
        </div>
    </div>
</template>

<script>
    import  SweetAlert  from 'sweetalert'
    import axios from 'axios'
    export default {
        data() {
            return {
                formurl: {
                    url: '',
                },
                response: '',
                botao: true
            }
        },
        methods: {
            enviar() {
                this.botao = false
                // axios.post('https://encurturl.herokuapp.com/api', this.url)
                axios.post('http://localhost:3000/api', this.formurl)
                .then( (resp) => {
                    this.response = resp.data
                    this.alertService('Sucesso', 'Sua Url foi gerada', 'success')
                    this.botao = true
                }).catch( () => {
                    this.alertService('Erro', 'Erro ao diminuir sua url, tente novamente', 'error')
                    this.botao = true
                })
            },
            alertService(title, text, successOrErr) {
                SweetAlert({
                    title: title,
                    text: text,
                    icon: successOrErr
                })
            }
        }
    }
</script>


<style lang="scss" scoped>
    .form {
        width: 50% !important;
    }
    .form > div {
       width: 100%;
        display: grid;
        height: fit-content;
        position: relative;
        top: 50%;
        transform: translateY(-50%); 
    }
    .form h1 {
        text-align: center;
        margin: 30px;
        color: #26c4b1;
        font-family: cursive;
    }
    .form input {
        width: 50%;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #6a6a6a;
        margin: 5px auto;
        padding: 10px;
    }

    .form button {
        width: 50%;
        height: 40px;
        border-radius: 5px;
        border: 1px solid #26c4b1;
        margin: 5px auto;
        background: #26c4b1;
    }
    .form button span {
        font-weight: 400;
        font-size: 20px;
        color: #ffffff;
    }
    .form a {
        text-align: center;
        margin-top: 20px;
    }
    .form h2 {
        font-family: cursive;
        color: #2a2a2a;
    }

    @media(max-width:600px) {
        .form {
            width: 100% !important;
            margin-top: -10px;
        }
        .form h1 {
            text-align: center;
            margin: 0px 0 20px;
            color: #ffffff;
            font-family: cursive;
        }
        .form input {
            width: 80%;
        }
        .form button {
            width: 80%;
            border: 2px solid #ffffff;
        }
    }
</style>