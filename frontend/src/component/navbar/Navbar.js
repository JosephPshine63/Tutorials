import React, { useState, useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import { Link, Route, Routes } from 'react-router-dom';
import { AddTutorial, AllTutorials, Home, UpdateTutorial } from '../../component';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Popper from '@mui/material/Popper'; // Import Popper for tooltip positioning
import AdbIcon from '@mui/icons-material/Adb';

function Navbar() {
  const [allTutorialsTooltipOpen, setAllTutorialsTooltipOpen] = useState(false);
  const [addTutorialTooltipOpen, setAddTutorialTooltipOpen] = useState(false);
  const allTutorialsTooltipAnchorRef = useRef(null);
  const addTutorialTooltipAnchorRef = useRef(null);

  const handleAllTutorialsMouseEnter = () => {
    setAllTutorialsTooltipOpen(true);
  };

  const handleAllTutorialsMouseLeave = () => {
    setAllTutorialsTooltipOpen(false);
  };

  const handleAddTutorialMouseEnter = () => {
    setAddTutorialTooltipOpen(true);
  };

  const handleAddTutorialMouseLeave = () => {
    setAddTutorialTooltipOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <center>
            <Stack direction="row" spacing={2}>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              </Typography>

              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                DEV.PIORUOCCO
              </Typography>
              <Button
                variant="outlined"
                onMouseEnter={handleAllTutorialsMouseEnter}
                onMouseLeave={handleAllTutorialsMouseLeave}
                ref={allTutorialsTooltipAnchorRef}
              >
                <Link to={"/get/all"} className="nav-link">
                  All Tutorials
                </Link>
                <Popper
                  open={allTutorialsTooltipOpen}
                  anchorEl={allTutorialsTooltipAnchorRef.current}
                  placement="bottom"
                >
                  <Typography sx={{ padding: 1, backgroundColor: '#f5f5f5', borderRadius: 5 }}>
                    See all the tutorials we have registered.
                  </Typography>
                </Popper>
              </Button>
              <Button
                variant="outlined"
                onMouseEnter={handleAddTutorialMouseEnter}
                onMouseLeave={handleAddTutorialMouseLeave}
                ref={addTutorialTooltipAnchorRef}
              >
                <Link to={"/post"} className="nav-link">
                  Add Tutorial
                </Link>
                <Popper
                  open={addTutorialTooltipOpen}
                  anchorEl={addTutorialTooltipAnchorRef.current}
                  placement="bottom"
                >
                  <Typography sx={{ padding: 1, backgroundColor: '#f5f5f5', borderRadius: 5 }}>
                    Add a new tutorial to our repository.
                  </Typography>
                </Popper>
              </Button>
            </Stack>
          </center>
        </Toolbar>
      </AppBar>
      <br/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get/all" element={<AllTutorials />} />
        <Route path="/post" element={<AddTutorial />} />
        <Route path="/get/:id" element={<UpdateTutorial />} />
      </Routes>
    </Box>
  );
}

export default Navbar;
