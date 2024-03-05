import './navbar.css';
  

 function head(){
    return(
        //    <div className="top">
        //  <p> Home </p>
        //  <p> About</p>
        //  <p> Connect </p>
        //    </div>
       // <nav style={{ backgroundColor: "", paddingTop: "80px" }}>
       <div className="header">
        <ul style={{ display: "flex", justifyContent:"flex-start",listStyle:"none", gap: "50px" }}>
          <li style={{ marginRight: "10px", }}>
            <a href="/" style={{ color: "blue" }}>
              Home
            </a>
          </li>
          <li style={{ marginRight: "10px" }}>
            <a href="/" style={{ color: "blue" }}>
              Contact
            </a>
          </li>
          <li style={{ marginRight: "10px" }}>
            <a href="/" style={{ color: "blue" }}>
              Menu
            </a>
          </li>
        </ul>
        
        
         <img  style={{height:"50px",width:"50px",marginRight: "10px"}}  src="https://cdn-icons-png.flaticon.com/512/6951/6951865.png" alt="" />
       
       </div>
    )
  }
  export default  head;
