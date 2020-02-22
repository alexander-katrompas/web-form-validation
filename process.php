<?php
// this simply dumps the posted information back to the browser for debuging purposes
//var_dump($_POST);


function redirect($url) {
    // this captures any server output
    ob_start();
    // this sets the http headers to redirect
    header('Location: ' . $url);
    // this sends out all the redirect information all at once
    ob_end_flush();
    // this makes sure no further output is sent
    // but be careful to use this only when you want your whole application to die (end)
    die();
}

function main() {
    /* This will test to make sure we have a non-empty $_POST array from
     * the form submission. */
    if (!empty($_POST)) {

        /* Each of these will strip anything harmful or extraneous out
         * of the submitted $_POST variables. */
        $fname = substr(strip_tags(trim($_POST['fname'])), 0, 64);
        $lname = substr(strip_tags(trim($_POST['lname'])), 0, 64);
        /* The cleaning routines above may leave a variable empty. If we
         * find an empty variable, we stop processing because that means
         * someone tried to send us something malicious or incorrect. */
        if (!empty($fname) && !empty($lname)) {
            /*
             * this sends the data back to the success page in the query string
             * we will learn how to process query strings later
             */
            redirect("success.html?fname=$fname&lname=$lname");
        } else {
            /*
             * this sends an error code back the error page in the query string
             * we will learn how to process query strings later
             */
            redirect('error.html?error=2');
        }
    } else {
            /*
             * this sends an error code back the error page in the query string
             * we will learn how to process query strings later
             */
        redirect('error.html?error=1');
    }
}

// this kicks off the script
main();

