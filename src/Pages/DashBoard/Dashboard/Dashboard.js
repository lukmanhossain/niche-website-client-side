import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import Booking from '../Booking/Booking';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import useAuth from '../../../Hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import ManageAllOrder from '../ManageAllOrderPage/ManageAllOrder';
import Products from '../../Home/Products/Products';
import ManageProducts from '../ManageProducts/ManageProducts';

const drawerWidth = 170;

function Dashboard(props) {
    const { window } = props;
    let { path, url } = useRouteMatch();
    const { admin, user, logOut } = useAuth();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <NavLink style={{ textDecoration: 'none' }} to="/home">
                <Button color="inherit">Home</Button>
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} to={`${url}/payment`}>
                <Button color="inherit">Payment Now</Button>
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} to={`${url}/booking`}>
                <Button color="inherit">My Orders</Button>
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} to={`${url}/review`}>
                <Button color="inherit">Take Review</Button>
            </NavLink>
            {admin && <Box>
                <NavLink style={{ textDecoration: 'none' }} to={`${url}/makeAdmin`}>
                    <Button color="inherit">Make Admin</Button>
                </NavLink>
                <NavLink style={{ textDecoration: 'none' }} to={`${path}/manageOrder`}>
                    <Button color="inherit">Manage All Order</Button>
                </NavLink>
                <NavLink style={{ textDecoration: 'none' }} to={`${path}/manageproducts`}>
                    <Button color="inherit">Manage Products</Button>
                </NavLink>
            </Box>}
            {
                user?.email ?
                    <Button onClick={logOut} style={{ textDecoration: 'none', color: 'blue' }} color="inherit">LogOut</Button>
                    :
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                        <Button color="inherit">Login</Button>
                    </NavLink>
            }
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        DashBoard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route path={`${path}/booking`}>
                        <Booking></Booking>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/manageOrder`}>
                        <ManageAllOrder></ManageAllOrder>
                    </Route>
                    <Route path={`${path}/manageproducts`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
