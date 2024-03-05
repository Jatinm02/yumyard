 // import {NavLink} from "react-router-dom";
 import "./footer.css";
//  import { NavLink } from "react-router-dom";
//  import FacebookIcon from "@mui/icons-material/Facebook";
//  import LinkedInIcon from "@mui/icons-material/LinkedIn";
//  import TwitterIcon from "@mui/icons-material/Twitter";
//  import InstagramIcon from "@mui/icons-material/Instagram";


 function bot(){
  return (
       <footer>
           <div className="footer-nav" >
           <h2>Important links</h2>
               <p className=" footer-navlink" > Home   </p>
               <p   className=" footer-navlink"> About   </p>
               <p   className=" footer-navlink">Contact    </p>
               <p   className=" footer-navlink">  Cart  </p>
                
                    {/* <NavLink to="homemain" className="footer-navlink">
                                  Home
                            </NavLink> */}
                 {/* <NavLink to="/about" className="footer-navlink">
                               About
                          </NavLink>
                     <NavLink to="/" className="footer-navlink">
                           Contact
                       </NavLink>
                    <NavLink to="/" className="footer-navlink">
                            Cart
                     </NavLink> */}
                     
           </div>
       </footer>
  );
}


export default bot;
