import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Base({title,description,children}) {
  const navigate = useNavigate();
  
  return (
    <div className="main-container">
      <header>
      <AppBar position="static">
        <Toolbar variant="dense">
          
        <Typography  sx={{ mr: 2 }}>
            Studends-app
            </Typography>
            <IconButton edge="end"
             color="inherit"
              aria-label="menu" 
              onClick={()=>navigate("/")}
              sx={{ mr: 2 }}>
            Dashboard
          </IconButton>
          <IconButton edge="end"
           color="inherit"
            aria-label="menu"
            onClick={()=>navigate("/students")}
             sx={{ mr: 2 }}>
            Students
          </IconButton>
          <IconButton edge="end" 
          color="inherit" 
          aria-label="menu" 
          onClick={()=>navigate("/add-student")}
          sx={{ mr: 2 }}>
            Add Studends
          </IconButton>

        </Toolbar>
      </AppBar>
        <nav>
          

        </nav>
      </header>
      <main>
        <h1>{title}</h1>
        <h4>{description}</h4>
        <div className="container">
          {children}
        </div>
        
      </main>
    </div>
  );
}

export default Base;
