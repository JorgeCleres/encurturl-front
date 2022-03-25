<template>
    <div>
        <input type="text" v-model="url" placeholder="Digite sua URL">
        <button @click="enviar">Enviar</button>

        <a :href="response.url" target="_blank">{{response.url}}</a>
    </div>
</template>

<script>
    import  SweetAlert  from 'sweetalert'
    import axios from 'axios'
    export default {
        data() {
            return {
                url: '',
                response: ''
            }
        },
        methods: {
            enviar() {
                axios.post('http://localhost:3000/api/', this.url)
                .then( (resp) => {
                    this.response = resp.data
                    this.alertService('Sucesso', 'Sua Url foi gerada', 'success')
                }).catch( () => {
                    this.alertService('Erro', 'Erro diminuir sua url, tente novamente', 'error')
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

</style>