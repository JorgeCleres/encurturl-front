import Api from './Api'
import  SweetAlert  from 'sweetalert'
//import alertService from './alertService'
//import shortUrl from "node-url-shortener";

export default {
    async sendUrl(url) {
        try {
            await Api().post('/api', url)
            this.alertService('Sucesso', 'Sua Url foi gerada', 'success')
        }catch {
            this.alertService('Erro', 'Erro diminuir sua url, tente novamente', 'error')
        }
    },

    alertService(title, text, successOrErr) {
        SweetAlert({
            title: title,
            text: text,
            icon: successOrErr
        })
    }
}
