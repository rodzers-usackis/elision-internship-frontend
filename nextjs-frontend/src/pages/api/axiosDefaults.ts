import axios from 'axios'

//content-type is set to application/json by default
axios.defaults.headers.post['Content-Type'] = 'application/json'
//accept application/json by default
axios.defaults.headers.common['Accept'] = 'application/json'

//disable cors
axios.defaults.withCredentials = false;