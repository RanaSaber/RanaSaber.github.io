let users = [{name:"r", password:"r"}, {name:"m", password:"m"}];
let user = "";

function auth(username, password) {
    for (let usr of users) {
        if (usr.name == username && usr.password == password) {
            user = username;
            break;
        }
    }

    return user;
}

function authenticationMiddelware(req, res, next) {
    console.log(user);
    if(user){
        next();   
    }
    else {
        res.redirect("/error");
    }
};

module.exports = {auth:auth, authenticationMiddelware:authenticationMiddelware};