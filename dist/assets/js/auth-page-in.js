// Listen for the DOMContentLoaded event
function check_auth() {

    // Run your authentication status check function
    get_auth_status();

}

check_auth()

// this would be for unauthenticated pages
function get_auth_status() {
    if (localStorage.getItem('auth') === 'true') {
        // let's redirect to a authenticated page cause the user is not authenticated
        window.location.href = 'index.html';
    }
}
