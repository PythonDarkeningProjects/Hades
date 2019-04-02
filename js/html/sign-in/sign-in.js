function getDataFromDB(username, password) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText)[0];
            if (data.username == username && data.password == password) {
                console.log("successful authentication");
                window.open("http://localhost:3000/dashboard/main", "_top");
            }
            else {
                console.log("incorrect username or password!");
                var modal = document.getElementById("sign-in-form-alerts");
                modal.innerHTML += ('<!-- Modal -->' +
                    '<div class="modal fade" id="sign-in-error-modal" tabindex="-1" role="dialog" aria-labelledby="sign-in-error-modal" aria-hidden="true">' +
                    '<div class="modal-dialog" role="document">' +
                    '<div class="modal-content">' +
                    '<div class="modal-header border-0">' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                    '<span aria-hidden="true">&times;</span>' +
                    '</button>' +
                    '</div>' +
                    '<div class="modal-body">' +
                    '<div class="alert alert-danger fade show">' +
                    '<strong>Error!</strong> Invalid username or password' +
                    '</div>' +
                    '</div>' +
                    '<div class="modal-footer border-0">' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>');
                $('#sign-in-error-modal').modal('show');
            }
        }
    };
    xhttp.open("POST", "http://localhost:3000/auth", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send("username=" + username + "&password=" + password);
}
