import Api from './Api'
import alertService from './alertService'

export default {
    async UrlService(url) {
        try {
            await Api().post('/api', url)
            await alertService('Sucesso', 'Sua Url foi gerada', 'success')
        }catch {
            await alertService('Erro', 'Erro diminuir sua url, tente novamente', 'error')
        }
    }
}
