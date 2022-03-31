const users = [];

function indexOf (user) 
{
    for (let i = 0; i < users.length; i++)
    {
        const suser = users[i];
        if(suser.name == user.name && suser.pass == user.pass) return i;
    }
    return -1;
}

function create (user)
{
    const userid = users.length;
    users.push(user);
    return userid;
}

function login (req, res) 
{
    let hasacc = true;
    console.log(req.body);
    const nuser = {name:req.body["usuario"], pass:req.body["password"]};
    let userID = indexOf(nuser);
    if(userID == -1) 
    {
        userID = create(nuser);
        hasacc = false;
    }
    const page = `<h2>Bem vindo${hasacc?" novamente ":""} ${nuser.name}</h2><form><input type="hidden" name="token" value="${userID}"/></form>`;
    res.send(page);
}

module.exports = {login, users};
