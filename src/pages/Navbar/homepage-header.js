import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";

export default function HomePageHeader() {
    return (
        <div className="header">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="small"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                        >
                            <img src={require('../../images/logo.png')} alt="" className="logo" />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        </Typography>
                        <Link color="inherit" to="/">Login</Link>
                        <Button color="inherit" to="/create-playlist">Create Playlist</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}
