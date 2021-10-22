import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './components/Auth/Login/Login'
import Register from './components/Auth/Register/Register'
import PrivateRoute from './components/Auth/Permissions/PrivateRoute'
import AdminRoute from './components/Auth/Permissions/AdminRoute'
import AddNewPiece from './components/Admin/Manage/AddNewPiece'
import Home from './components/Guset/Home/Home'
import AdminDashboard from './components/Admin/Manage/Dashboard'
import EditArtPiece from './components/Admin/Manage/EditArtPiece'
import App from './App'

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
            <Route path="/" exact >
                    <App />
            </Route>
                <Route path='/login' exact component={Login} />
                <Route path='/register' exact component={Register} />
                <PrivateRoute path='/guest/home' exact component={Home} />
                <AdminRoute path='/admin/dashboard' exact  component={AdminDashboard} />
                <AdminRoute path='/admin/addNew' exact  component={AddNewPiece} />
                <AdminRoute path='/admin/editArt/:id' exact  component={EditArtPiece} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes