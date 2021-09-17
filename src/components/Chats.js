import React, { useEffect, useState } from "react";
import { ChatEngine } from "react-chat-engine";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { useAuth } from "../context/authContext";
import axios from "axios";

function Chats() {
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const { user } = useAuth();
  const logoutHandler = async () => {
    await auth.signOut();
    history.push("/");
  };

  const getFile = async(url) => {
      const response = await fetch(url);
      const data = await response.blob();

      return new File([data],"userPhoto.jpg",{type:"image/jpeg"})
  };

  useEffect(() => {
    if (!user) {
      history.push("/");

      return;
    }

    axios.get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": process.env.REACT_APP_CHAT_ENGINE_ID,
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch( ()=>{
          let formdata = new FormData();      
          formdata.append('email',user.email);
          formdata.append('username',user.email);
          formdata.append('secret',user.uid);
          getFile(user.photoURL)
          .then( (avatar)=>{
              formdata.append('avatar',avatar,avatar.name)

              axios.post('https://api.chatengine.io/users/',
                formdata,
                {headers:{"private-key":process.env.REACT_APP_CHAT_ENGINE_KEY}}
              )
              .then(()=>{setIsLoading(false)})
              .catch( (error)=>{console.log(error)} )
          })
      } )
  }, [user, history]);

  if(!user || isLoading) {return 'Loading...'}

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">Unichat</div>
        <div className="logout-tab" onClick={logoutHandler}>
          Logout
        </div>
      </div>
      <ChatEngine
        height="calc(100vh-66px)"
        projectID={process.env.REACT_APP_CHAT_ENGINE_ID}
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
}

export default Chats;
