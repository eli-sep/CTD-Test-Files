fetch("https://jsonplaceholder.typicode.com/users/3")
    .then((response) => {
        console.log(response);
        console.log("Headers", response.headers);
        console.log("Body", response.body.json());
    });
