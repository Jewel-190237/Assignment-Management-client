import { Link } from "react-router-dom";
import logo from "../../../../assets/logo.jpg"
import user1 from "../../../../assets/user.png"
import { useContext } from "react";
import { authContext } from "../../provider/AuthProvider";
import { Tooltip } from 'react-tooltip'


const Navbar = () => {

    const { user, logOut } = useContext(authContext)

    const navLinks = <>
        <li><a><Link to='/'>Home</Link> </a></li>
        <li><a><Link to='/about'>About</Link> </a></li>
        <li><a><Link to='/service'>Services</Link> </a></li>
        <li><a><Link to='/blog'>Blog</Link> </a></li>
        <li><a><Link to='/content'>Content</Link> </a></li>

    </>

const handleSignOut = () => {
    logOut()
        .then()
        .catch()
}
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <img className="w-1/12 rounded-full" src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                {
                    user ?
                        <div className="navbar-end gap-3">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {
                                            user.photoURL ?
                                                <img alt="user" src={user.photoURL} />
                                                :
                                                <img alt="user" src={user1} />
                                        }

                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">

                                    <Link to='/profile'> <li><a>Profile</a></li> </Link>
                                    <li onClick={handleSignOut}><a>Logout</a></li>
                                </ul>
                            </div>

                            <button onClick={handleSignOut} ><a id="clickable" className="btn  my-anchor-element bg-slate-600 text-white outline outline-1 outline-green-700">Log Out</a>
                                <Tooltip anchorSelect="#clickable" clickable>
                                    <p className="">Are You sure to Logout?</p>
                                </Tooltip>
                            </button>
                            {/* <button onClick={handleSignOut} className="btn bg-slate-600 text-white outline outline-1 outline-green-700">Sign Out</button> */}
                            {/* Dark Mode  */}


                            {/* <label className="flex cursor-pointer gap-2" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                                <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                            </label> */}
                        </div>
                        :
                        <div className="navbar-end gap-3">
                            {/* <img className="w-1/12 rounded-full" src={user1} alt="" /> */}
                            <Link to='/login'><button className="btn bg-slate-600 text-white outline outline-1 outline-green-700">
                                Login
                                <Tooltip anchorSelect="#clickable" clickable>
                                    <p className="">Are You sure?</p>
                                </Tooltip>
                            </button></Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;