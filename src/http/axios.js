import axios from 'axios';

function login(payload) {
    axios.post('/login', {username: payload.username, password: payload.password})
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        })
    if(payload.user == 'admin' && payload.password == "admin123") {
        console.log('login success');
        this.state.user.loginTime = new Date().Format("yyyy-MM-dd");
    } else {
        console.log('login failed');
    }
}
