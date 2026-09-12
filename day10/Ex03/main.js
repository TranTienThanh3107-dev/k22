function hideEmail(email) {
    const id = email.indexOf("@");
    const domain = email.slice(id);
    let userName = email.slice(0, id);
    let rel;
    let res = "";
    if (userName.length > 4) {
        rel = userName.slice(2, id - 2);
        res = userName.slice(0, 2) + "*".repeat(rel.length) + userName.slice(id - 2, id) + domain;
    }
    else {
        rel=userName.slice(1, id);
        res = userName.slice(0, 1) + "*".repeat(rel.length) + domain;
    }
    return res;
}

console.log(hideEmail("alexander@gmail.com"));
console.log(hideEmail("nguyenvana@f8.edu.vn"));
console.log(hideEmail("frontend@example.com"));
console.log(hideEmail("an@gmail.com"));
console.log(hideEmail("john@gmail.com"));

