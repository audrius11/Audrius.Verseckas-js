import React from "react";
import  './home.css';
import ListHome from "./list";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import Login from "./loginForm";
import { Link, useHistory } from "react-router-dom";

function Homepage(){
    const [searchQuery, setSearchQuery] = useState("");
    const [seen, setSeen] = useState(false)

    function togglePop () {
        setSeen(!seen);
    };
    const [procedureItems, setProcedureItems] = useState ([
        {
          id: 1,
          category: "Facial",
          title: "JavaScript Facial",
          img: <img src="facial.jpg"  />,
          description: "Experience the rejuvenating power of JavaScript Facial.",
        },
        {
          id: 2,
          category: "Massage",
          title: "Node.js Massage",
          img: <img src="massage.jpg"  />,
          description: "Relax and unwind with our Node.js Massage.",
        },
        {
            id: 3,
            category: "Massage",
            title: "Node.js Massage",
            img: <img src="massage.jpg"  />,
            description: "Relax and unwind with our Node.js Massage.",
          },
      ]);
    
      const deleteItem = (id) => {
        const updatedItems = procedureItems.filter((item) => item.id !== id);
        setProcedureItems(updatedItems);
      };
    
      const editItem = (id) => {
        
        console.log("Edit item with ID:", id);
      };
      const handleLogin = () => {
        
        console.log("Login button clicked");
      };
      const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
      };
      const filteredProcedureItems = procedureItems.filter((item) =>
     item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    

    return(
        <body>
        <header>
          <h1>JS Beauty Procedure</h1>
          <div>
          <button className="btn-homepage  btn-info " onClick={togglePop}>login</button>
          {seen ? <Login toggle={togglePop} /> : null}
          </div>
        </header>
          <div className="home-search">
          <input
            type="text"
             placeholder="Search by category"
            value={searchQuery}
             onChange={handleSearchChange}
             className="search-1"
            />
          </div>


          <div className="home-container">
          <div>
      {filteredProcedureItems.map((item) => (
        <ListHome
          key={item.id}
          category={item.category}
          title={item.title}
          img={item.img}
          description={item.description}
          deleteItem={deleteItem}
          editItem={editItem}
        />
      ))}
    </div>

          </div>



        
        <div class="info-container">
          <h2>About Us</h2>
          <p>Welcome to JS Beauty Procedure, where we offer the latest and most innovative beauty treatments using JavaScript technology. Our team of experts will make sure you leave feeling rejuvenated and beautiful.</p>
          
          <h2>Treatments</h2>
          <ul>
            <li>JavaScript Facial</li>
            <li>Node.js Massage</li>
            <li>React Manicure</li>
            <li>Angular Pedicure</li>
          </ul>
          
          <h2>Contact Us</h2>
          <p>For appointments or inquiries, please call <strong>123-456-7890</strong> or email us at <strong>info@jsbeautyprocedure.com</strong>.</p>
        </div>
        
        <footer>
          <p>&copy; 2023 JS Beauty Procedure. All rights reserved.</p>
        </footer>
      </body>



    );
}
export default Homepage;