import React from "react";

import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import PersonIcon from "@mui/icons-material/Person";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" className="link">
          CampusConnect
        </Link>
      </div>

      <ul>
        <li>
          <Link to="/aboutus">Hakkimizda</Link>
        </li>
        <li>
          <Link to="/contact" className="link">
            Iletisim
          </Link>
        </li>
        <li>
          <Link to="/advert" className="link">
            Ilanlar
          </Link>
        </li>
        <li>
          <Link to="/announcements" className="link">
            Duyurular
          </Link>
        </li>
        <li>
          <Link to="/events" className="link">
            Etkinlik
          </Link>
        </li>
        <li>
          <Link to="/news" className="link">
            Haberler
          </Link>
        </li>

        <li className="dropdown">
          <Link to="/profile" className="link dropbtn">
            <PersonIcon
              sx={{
                fontSize: 30,
              }}
            />
            <div className="dropdown-content" style={{ right: 0 }}>
              <Link to="/login"> Uye Girisi </Link>
              <Link to="/signup">Kayit Ol</Link>
              <Link to="/profile">Profil</Link>
              <Link to="/my-adverts">Ilanlarim</Link>
              <Link>ilanlarim</Link>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
// const [anchorElNav, setAnchorElNav] = useState(null);
// const [anchorElUser, setAnchorElUser] = useState(null);

// const handleOpenNavMenu = (event) => {
//   setAnchorElNav(event.currentTarget);
// };
// const handleOpenUserMenu = (event) => {
//   setAnchorElUser(event.currentTarget);
// };

// const handleCloseNavMenu = () => {
//   setAnchorElNav(null);
// };

// const handleCloseUserMenu = () => {
//   setAnchorElUser(null);
// };
// <AppBar position="sticky" style={{ background: "#fff" }}>
//   <Container maxWidth="lg">
//     <Toolbar justify="space-between">
//       <AdbIcon
//         sx={{ display: { xs: "none", md: "flex" }, mr: 1, color: "black" }}
//       />
//       <Link to="/">
//         <Typography
//           variant="h6"
//           noWrap
//           style={{ flex: 5 }}
//           component="a"
//           href="/"
//           sx={{
//             mr: 2,
//             display: { xs: "none", md: "flex" },
//             fontFamily: "monospace",
//             fontWeight: 700,
//             letterSpacing: ".1rem",
//             color: "black",
//             textDecoration: "none",
//           }}
//         >
//           CampusConnect
//         </Typography>
//       </Link>

//       <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//         <IconButton
//           size="large"
//           aria-label="account of current user"
//           aria-controls="menu-appbar"
//           aria-haspopup="true"
//           onClick={handleOpenNavMenu}
//           color="black"
//         >
//           <MenuIcon />
//         </IconButton>
//         <Menu
//           id="menu-appbar"
//           anchorEl={anchorElNav}
//           anchorOrigin={{
//             vertical: "bottom",
//             horizontal: "left",
//           }}
//           keepMounted
//           transformOrigin={{
//             vertical: "top",
//             horizontal: "left",
//           }}
//           open={Boolean(anchorElNav)}
//           onClose={handleCloseNavMenu}
//           sx={{
//             display: { xs: "block", md: "none" },
//           }}
//         ></Menu>
//       </Box>
//       <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

//       <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//         <Button
//           onClick={handleCloseNavMenu}
//           sx={{ my: 2, color: "black", display: "block", mx: 5 }}
//         >
//
//         </Button>
//         <Button
//           onClick={handleCloseNavMenu}
//           sx={{ my: 2, color: "black", display: "block", mx: 5 }}
//         >
//           <Link to="/contact">Iletisim</Link>
//         </Button>
//         <Button
//           onClick={handleCloseNavMenu}
//           sx={{ my: 2, color: "black", display: "block", mx: 5 }}
//         >
//           <Link to="/advert">Ilanlar</Link>
//         </Button>
//         <Button
//           onClick={handleCloseNavMenu}
//           sx={{ my: 2, color: "black", display: "block", mx: 5 }}
//         >
//           <Link to="/announcements">Duyurular</Link>
//         </Button>
//         <Button
//           onClick={handleCloseNavMenu}
//           sx={{ my: 2, color: "black", display: "block", mx: 5 }}
//         >
//           <Link to="/events">Etkinlik</Link>
//         </Button>
//       </Box>

//       <Box sx={{ flexGrow: 0 }}>
//         <Tooltip title="Open settings">
//           <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//             <Avatar />
//           </IconButton>
//         </Tooltip>
//         <Menu
//           sx={{ mt: "45px" }}
//           id="menu-appbar"
//           anchorEl={anchorElUser}
//           anchorOrigin={{
//             vertical: "top",
//             horizontal: "right",
//           }}
//           keepMounted
//           transformOrigin={{
//             vertical: "top",
//             horizontal: "right",
//           }}
//           open={Boolean(anchorElUser)}
//           onClose={handleCloseUserMenu}
//         >
//           <MenuItem onClick={handleCloseUserMenu}>
//             <Link to="/profile">Profil</Link>
//           </MenuItem>
//           <MenuItem onClick={handleCloseUserMenu}>
//             <Link to="/my-adverts">Ilanlarim</Link>
//           </MenuItem>
//           <MenuItem onClick={handleCloseUserMenu}>
//             <Link>Cikis Yap</Link>
//           </MenuItem>
//         </Menu>
//       </Box>
//     </Toolbar>
//   </Container>
// </AppBar>
