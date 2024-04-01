import "./App.css";
import { getToken } from "firebase/messaging";
import { messaging, onMessageListener } from "../firebase/firebseInit";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    function requestPermission() {
      console.log("Requesting permission...");
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("notification permission granted");
          getToken(messaging, {
            vapidKey:
              "BIts8SV8Tofodre6gUiyQxDJfWGsKJ5P1ag1MIAcGuk0gXRXCe9dedFWbW9Ol_c4m9KTsEDqf1i-TmZA46wXSE8",
          })
            .then((token) => {
              // ** send this token to notification api to your backend
              console.log("token", token);
            })
            .catch((err) => {
              console.log("error", err);
            });
        } else {
          console.log("Notification permission denied.");
        }
      });
    }
    // Check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else if (Notification.permission !== "granted") {
      requestPermission();
    }
    onMessageListener();
  }, [onMessageListener]);

  return <div>Jamal</div>;
}

export default App;
