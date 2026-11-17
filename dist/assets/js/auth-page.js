// Listen for the DOMContentLoaded event
function check_auth() {

    // Run the authentication status check function
    get_auth_status();

}
check_auth()

// this is for authenticated pages
function get_auth_status() {
  if (localStorage.getItem('auth') !== 'true') {
    localStorage.removeItem('auth');

    window.location.href =
      `auth-signin.html`;
    return;
  }

  check_auth_status();
}

function getCurrentPath() {
  return (
    window.location.pathname +
    window.location.search +
    window.location.hash
  );
}

// this is to log users out
document.addEventListener('DOMContentLoaded', function () {
document.getElementById('logout-button').addEventListener('click', async function (event) {
    event.preventDefault()
    await logout()
})
});

async function logout() {
    // also send a request to the logout api endpoint
    const apiUrl = "https://api.drockbar.com/log-out";

    const requestOptions = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
    credentials: 'include', // set credentials to include cookies
    };
    
try {
    const response = await fetch(apiUrl, requestOptions);
    
    if (!response.ok) {
            // alert('an error occurred. Please try again');
                if (!response.ok) {
        // alert('an error occurred. Please try again');
        return;
    }
        return;
      }
        const data = await response.json();
        localStorage.removeItem('auth')
        window.location.href = 'auth-signin.html';
    } finally{
        // do nothing
    }
}

async function check_auth_status() {
    const apiUrl = "https://api.drockbar.com/user-auth-status";

    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include', // set credentials to include cookies
    };

    try {
        const response = await fetch(apiUrl, requestOptions);

        if (!response.ok) {
            const errorData = await response.json();

            if  (errorData.error === 'No Authentication cookie found' || errorData.error === "Unauthorized attempt! JWT's not valid!" || errorData.error === "No Refresh cookie found") {

                logout();

            } else {
                logout();
            }
            return;
        }

        const responseData = await response.json();

        document.getElementById("inventoryTitle").textContent = responseData.name;

        localStorage.setItem('auth', 'true');
    } finally {
        if (localStorage.getItem('auth') !== 'true') {
            window.location.href = 'auth-signin.html';
        }
    }
}
