// send files only
const checkFile = document.querySelector("#file-upload");
checkFile.onchange = async function() {
    var label = this.previousElementSibling;

    var fileName = this.files[0] ? this.files[0].name : 'No file chosen';
    label.classList.add("active");

    await new Promise((resolver) => setTimeout(resolver, 1500))

    label.textContent = fileName;
    label.classList.remove("active");
}

// ! ================== validate forms ==================
let form = document.querySelector("form");
let fullName = document.querySelector("#fullname");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let specialization = document.querySelector("#specialization");
let experience = document.querySelector("#experience");
let timejobs = document.querySelector("#timejobs");
let message = document.querySelector("#message");

const fields = [{
        id: 1,
        element: fullName,
        regex: /^(\w+)\s(\w+)$/,
        requiredMsg: "The full name is a required",
        RegExpMsg: "The username must contain at least two words separated by a space.",
    },

    {
        id: 2,
        element: email,
        regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        requiredMsg: "The email is a required",
        RegExpMsg: "Invalid email",
    },

    {
        id: 3,
        element: phone,
        regex: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        requiredMsg: "The phone is a required",
        RegExpMsg: "Phone number must match format with or without country code",
    },

    {
        id: 4,
        element: country,
        regex: null,
        requiredMsg: "The country is a required",
    },
]


form.addEventListener("submit", function(e) {
    e.preventDefault();
    fields.map((items) => {
        validation(items.element, items.regex, items.requiredMsg, items.RegExpMsg)
    })
});

fields.map((items) => {
    items.element.onblur = () => validation(items.element, items.regex, items.requiredMsg, items.RegExpMsg);
    items.element.oninput = () => validation(items.element, items.regex, items.requiredMsg, items.RegExpMsg);

})

const validation = (feild, regex, feildEmpty, feildRegExp) => {
    let errorMsg = feild.nextElementSibling;

    if (!feild.value.trim()) {
        errorMsg.innerHTML = `<i class="error fa fa-exclamation-circle" aria-hidden="true"></i> ${feildEmpty}`;
        errorMsg.classList.add("active")
        feild.style.border = "1px solid #f00"

    } else if (regex && !regex.test(feild.value)) {
        errorMsg.innerHTML = `<i class="error fa fa-exclamation-circle" aria-hidden="true"></i> ${feildRegExp}`;
        errorMsg.classList.add("active")
        feild.style.border = "1px solid #f00"
    } else {
        errorMsg.classList.remove("active")
        feild.style.border = "1px solid #DBDBDB"
    }
}
