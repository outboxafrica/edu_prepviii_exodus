var users;
var qns;
var anss;

//Registering a user
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

//login a user
var loginuser = document.getElementById('loginbtn');
loginuser.addEventListener('click', function(e) {
    e.preventDefault();
    users = !!localStorage.getItem('users') ?
        JSON.parse(localStorage.getItem('users')) : [];
    var un = document.getElementById('uname').value;
    var pass = document.getElementById('passwd').value;
    var ulen = users.length;

    for (i = 0; i < ulen; i++) {
        if (un == users[i].username && pass == users[i].password) {
            window.localStorage.setItem("username", un);
            window.location.href = "html/dashboard.html";
            return;
        }
    }
    alert("Invalid login details");

});


//posting a question 
function askQn() {
    qns = !!localStorage.getItem('qns') ?
        JSON.parse(localStorage.getItem('qns')) : [];
    var qnTitle = document.getElementById('ttArea').value;
    var qnDescription = document.getElementById('bodyArea').value;
    var username = document.getElementById("user").textContent;
    var qnID = Date.now();
    var qn = {
        qnid: qnID,
        qntitle: qnTitle,
        qnDescription: qnDescription,
        user: username
    }

    qns.push(qn);
    alert("posted successfully");
    window.localStorage.setItem('qns', JSON.stringify(qns));
}

//displaying quetions
function retrieveQns() {
    qns = !!localStorage.getItem('qns') ?
        JSON.parse(localStorage.getItem('qns')) : [];

    const parent = document.getElementById('question-list');
    for (const {
            qntitle,
            qnDescription,
            user
        }
        of qns) {
        // Build up new dom nodes
        const qncontainer = document.createElement("div");
        qncontainer.className = 'question-summary';
        const title = document.createElement("h3");
        title.id = "";
        title.textContent = qntitle;
        const askedBy = document.createElement("p");
        askedBy.textContent = " Asked by: " + user;
        const description = document.createElement("div");
        description.className = 'qn-body';
        description.textContent = qnDescription;
        const links = document.createElement("div");
        links.className = 'links';
        const answerLink = document.createElement("a");
        answerLink.className = 'link';
        answerLink.href = 'ans.html';
        answerLink.innerHTML = "Answer"
        const viewAnswerLink = document.createElement("a");
        viewAnswerLink.className = 'link';
        viewAnswerLink.href = 'view.html';
        viewAnswerLink.innerHTML = "View solutions"
            // append them: 
        parent.appendChild(qncontainer);
        qncontainer.appendChild(title);
        qncontainer.appendChild(askedBy);
        qncontainer.appendChild(description);
        qncontainer.appendChild(links);
        links.appendChild(answerLink);
        links.appendChild(viewAnswerLink);
    }
}

//Answering a question
function getQn() {
    var qnT = document.getElementById('uname').value;
    window.localStorage.setItem("qntitle", qnT);
}

function ansQn() {
    anss = !!localStorage.getItem('anss') ?
        JSON.parse(localStorage.getItem('anss')) : [];
    var ansContent = document.getElementById('ans-area').value;
    var username = document.getElementById("user").textContent;
    var qnTitle = document.getElementById("qtn").textContent;
    var ansID = Date.now();
    var ans = {
        ansid: ansID,
        qntitle: qnTitle,
        ansDescription: ansContent,
        user: username
    }
    anss.push(ans);
    alert("posted successfully");
    localStorage.setItem('anss', JSON.stringify(anss));
}


function viewSolutions() {
    anss = !!localStorage.getItem('anss') ?
        JSON.parse(localStorage.getItem('anss')) : [];
    const solutions = document.getElementById('qns')
    for (qtntitle in anss.qntitle) {
        var qnTitle = anss.qntitle;
        var username = anss.user;
        var answerdesc = anss.qnDescription;
        // Build up new dom nodes 
        const title = document.createElement("h2");
        title.textContent = qnTitle;
        const answeredBy = document.createElement("p");
        answeredBy.textContent = " Answer by: " + username;
        const description = document.createElement("div");
        description.textContent = answerdesc;
        const comment = document.createElement("input");
        // append them:
        solutions.appendChild(title);
        solutions.appendChild(askedBy);
        solutions.appendChild(description);
        solutions.appendChild(comment);
    }
}


//loading username on all pages
function userName() {
    var uname = window.localStorage.getItem('username');
    if (uname != "undefined " || name != "null ") {
        document.getElementById('user').innerHTML = uname;
        return;
    } else
        document.getElementById('welcomeMessage').innerHTML = "Hello! ";
}
//Voting
var votes = 0;

function dovote(add) {
    if (add) {
        votes++;
    } else {
        votes--;
    }
    if (votes >= 0) {
        document.getElementById('vote-count').innerText = votes;
    } else {
        votes = 0;
    }
}

//logging out user
function logout() {
    confirm("Are you sure you want to logout?");

}