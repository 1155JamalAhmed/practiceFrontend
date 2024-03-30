import "./App.css";
import { getToken, onMessage } from "firebase/messaging";
import { messaging, onMessageListener } from "../firebase/firebseInit";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    function requestPermission() {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("Notification permission granted.");
          getToken(messaging, {
            vapidKey:
              "BIts8SV8Tofodre6gUiyQxDJfWGsKJ5P1ag1MIAcGuk0gXRXCe9dedFWbW9Ol_c4m9KTsEDqf1i-TmZA46wXSE8",
          })
            .then((token) => {
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
    requestPermission();
    onMessageListener()
      .then((payload) => {
        console.log(payload.data, "payload notification");
        toast.success(payload.data.message);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);
  return <div>Jamal</div>;
}

export default App;
