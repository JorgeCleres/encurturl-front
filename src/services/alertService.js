import  SweetAlert  from 'sweetalert'

export default {
    alertService(title, text, successOrErr) {
        SweetAlert({
            title: title,
            text: text,
            icon: successOrErr
        })
    }
}