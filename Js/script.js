var users;
var qns;
var anss;

function signup() {
    const un = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const cpass = document.getElementById('cpassword').value;
    users = !!localStorage.getItem('users') ?
        JSON.parse(localStorage.getItem('users')) : [];
    var ulen = users.length;

    if (pass < 6) {
        alert("Your password must be six characters long");
        return false
    } else if (pass != cpass) {
        alert("Your passwords do not match.");
        return false
    }
    for (i = 0; i < ulen; i++) {
        if (un == users[i].username) {
            alert("Username already exists");
            return false;
        } else if (email == users[i].email) {
            alert("Email already used");
            return false;
        }
    }
    var user = {
        username: un,
        email: email,
        password: pass
    }

    users.push(user);
    alert("Registered successfully");
    localStorage.setItem('users', JSON.stringify(users));

}

function loginUser() {
    users = JSON.parse(localStorage.getItem('users'));
    var un = document.getElementById('uname').value;
    var pass = document.getElementById('passwd').value;
    var ulen = users.length;
    for (i = 0; i < ulen; i++) {
        if (un == users[i].username && pass == users[i].password) {
            window.location.href = "html/dashboard.html";
            return;
        }
    }
    alert("Invalid login details");
}


//posting a question 
function askQn() {
    qns = JSON.parse(localStorage.getItem('qns'));
    var qnTitle = document.getElementById('ttArea').value;
    var qnDescription = document.getElementById('bodyArea').value;

    var qn = {
        qnid: qnID,
        qntitle: qnTitle,
        qnescription: qnDescription,
        user: username
    }

    qns.push(qn);
    alert("posted successfully");
    localStorage.setItem('qns', JSON.stringify(qns));
}

function retrieveQns() {
    qns = JSON.parse(localStorage.getItem('qns'));
    var qnTitle = document.getElementById('ttArea').value;
    var qnDescription = document.getElementById('bodyArea').value;

    var qn = {
        qnid: qnID,
        qntitle: qnTitle,
        qnescription: qnDescription,
        user: username
    }

    qns.push(qn);
    alert("posted successfully");
    localStorage.setItem('qns', JSON.stringify(qns));
}

//Answering a question
//const ansQn = document.getElementById('submitans');
//ansQn.addEventListener('click', function(e) {
//e.preventDefault();
function ansQN() {
    anss = JSON.parse(localStorage.getItem('anss'));
    var ansContent = document.getElementById('ans-area').value;

    var ans = {
        qnid: qnID,
        ansid: ansID,
        ansDescription: ansContent,
        user: username
    }

    anss.push(ans);
    alert("posted successfully");
    localStorage.setItem('anss', JSON.stringify(anss));
}

function viewSolutions() {
    anss = JSON.parse(localStorage.getItem('anss'));
    var ansContent = document.getElementById('ans-area').value;

    var ans = {
        qnid: qnID,
        ansid: ansID,
        ansDescription: ansContent,
        user: username
    }

    anss.push(ans);
    alert("posted successfully");
    localStorage.setItem('anss', JSON.stringify(anss));
}

//my answers
function myAnss() {
    anss = JSON.parse(localStorage.getItem('anss'));
    var ansContent = document.getElementById('ans-area').value;

    var ans = {
        qnid: qnID,
        ansid: ansID,
        ansDescription: ansContent,
        user: username
    }

}