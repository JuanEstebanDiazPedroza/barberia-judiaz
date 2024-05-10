function getURLParams() {
    var searchParams = new URLSearchParams(window.location.search);
    return Object.fromEntries(searchParams.entries());
}

function showModalWithData(data) {
    var modal = document.getElementById("myModal");
    var modalContent = modal.querySelector('.modal-content');
    var formInfo = document.getElementById("formInfo");

    var formHTML = "";
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            formHTML += "<p><strong>" + key + ":</strong> " + data[key] + "</p>";
        }
    }
    formInfo.innerHTML = formHTML;

    modal.style.display = "block";
}

var formData = getURLParams();
showModalWithData(formData);
