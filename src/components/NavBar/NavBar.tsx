import { AppBar, Grid, Toolbar, Typography, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function Navbar() {
  const pages = [
    { label: "Cat List", link: "/cats" },
    { label: "Post", link: "/post" },
    { label: "??", link: "/??" },
  ];

  return (
    <div>
      <Grid container>
        <AppBar className="navBar" style={{ background: "#3B719F" }}>
          <Toolbar>
            <Grid item md={4}>
              <MenuItem>
                <Link to="/" key={"Logo"}>
                  <Typography variant="h5" component="div" className="links">
                    One-Stop CatShop
                  </Typography>
                </Link>
              </MenuItem>
            </Grid>
            {pages.map((page) => (
              <Grid item key={page.label}>
                <Link to={page.link}>
                  <MenuItem>
                    <Typography textAlign="center" className="links">
                      {page.label}
                    </Typography>
                  </MenuItem>
                </Link>
              </Grid>
            ))}
            <Grid item md={8}>
              <MenuItem className="profile">
                <Link to="/login" key={"Login"}>
                  <Typography variant="h5" component="div" className="links">
                    Log in
                  </Typography>
                </Link>
              </MenuItem>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  );
}
