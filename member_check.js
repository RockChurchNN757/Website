
function member_email_check() {
    if (document.getElementById("email-id").value == "jb440422@gmail.com" || document.getElementById("email-id").value == "jamesharrington.jbh3@gmail.com" ||
        document.getElementById("email-id").value == "tajaglover88@gmail.com") {
        //REMOVE ALREADY MEMBER CONTAINER
        document.getElementById("already-a-member-container-id").style.display = "none";
        //ADD VERIFICATION SUCCESSFULT CONTAINER
        document.getElementById("verification-successful-container-id").style.display = "block";
    } else {
        document.getElementById("couldnt-verify-err-id").style.display = "block";
    }
}

