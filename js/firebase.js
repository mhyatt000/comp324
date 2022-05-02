import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-database.js";

function auth_init(){

    const firebaseConfig = {
      apiKey: "AIzaSyAIColTbcgo9w8AUIKHk_2I6wZHW_ebaU0",
      authDomain: "web-fund-6f2b3.firebaseapp.com",
      databaseURL: "https://web-fund-6f2b3-default-rtdb.firebaseio.com",
      projectId: "web-fund-6f2b3",
      storageBucket: "web-fund-6f2b3.appspot.com",
      messagingSenderId: "747078392399",
      appId: "1:747078392399:web:e11fcb805b39f858ee283a"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    const database = getDatabase(app);

    return firebaseConfig, app, auth, database
}


function auth_register(){

    const firebaseConfig, app, auth, database = auth_init()

    register.addEventListener('click', (e) =>{

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                set(ref(database, 'users/' + user.uid), {
                        email: email,
                        password: password
                    }).then(() => {
                        // Data saved successfully!
                        alert('User Created Successfully');
                        location.reload();
                        })
                        .catch((error) => {
                        // The write failed...
                        alert(error);
                        });

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });

    });

} // func

function auth_signin() {

    const firebaseConfig, app, auth, database = auth_init()

    login.addEventListener('click', (e) => {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                var lgDate = new Date()

                update(ref(database, 'users/' + user.uid), {
                        last_login: lgDate,
                        password: password
                    }).then(() => {
                        // Data saved successfully!
                        alert('User Logged In Successfully');
                        location.reload();
                        })
                        .catch((error) => {
                        // The write failed...
                        alert(error);
                        });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    });

    logout.addEventListener("click", (e)=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            alert('Sign out Successful')
            location.reload();
            }).catch((error) => {
            // An error happened.
            alert(errorMessage)
            });
    })
} // func

// function auth_main(){
auth_register()
auth_signin()
// }
