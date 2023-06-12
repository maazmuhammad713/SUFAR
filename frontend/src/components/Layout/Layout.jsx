import { React, useState, useContext,useEffect } from "react";
import Header from "./../Header/Header";
import Cookies from "js-cookie";
import AdminHeader from "./../Header/AdminHeader";
import Routers from "../../router/Routers";
import Footer from "./../Footer/Footer";

import { AuthContext } from "./../../context/AuthContext";

const Layout = () => {
  const [IsAdmin, setIsAdmin] = useState(false);
  const { user } = useContext(AuthContext);
  // const { user } = useContext(AuthContext);
  // if (user && user.role === "admin") {
  //   setIsAdmin(true);
  // }
  useEffect(() => {
  //   if( localStorage.getItem('user') === null || localStorage.getItem('user') === 'undefined')
  //   {

      
  //   setIsAdmin(false)
  //   console.log('Inside NULL SetIsAdmin')
        
  //   }
  // else
  // {

  //       if(JSON.parse(localStorage.getItem('user')).role ==="admin")
  //       {
  //         setIsAdmin(true)
  //         console.log('Inside SetIsAdmin')
  //       }
  //       // else if(JSON.parse(localStorage.getItem('user')).role==="user")
  //       // {
  //       //   setIsAdmin(false)
  //       // }
  //       else
  //       {
  //         setIsAdmin(false)
  //       }
  // }

  if(user && user.role==="admin")
  {
    setIsAdmin(true)
  }
  else
  {
    setIsAdmin(false)
  }

  }, [user])
  
  
  return (
    <div>
      {IsAdmin ? <AdminHeader /> : <Header />}
      <Routers/>
      <Footer />
    </div>
  );
};

export default Layout;
