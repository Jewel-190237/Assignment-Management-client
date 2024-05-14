import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/Components/Root/Root';
import Home from './assets/Components/Pages/Layouts/Home';
import AuthProvider from './assets/Components/provider/AuthProvider';
import Login from './assets/auth/Login';
import Register from './assets/auth/Register';
import ErrorPage from './assets/Components/Pages/Layouts/ErrorPage';
import CreateAssignment from './assets/Components/Pages/Layouts/CreateAssignment';
import PrivateRoute from './assets/Components/provider/PrivateRoute';
import Assignments from './assets/Components/Pages/Layouts/Assignments';
import MyAssignment from './assets/Components/Pages/MyAssignment/MyAssignment';
import UpdateAssignment from './assets/Components/Pages/Layouts/UpdateAssignment';
import AssignmentDetails from './assets/Components/Pages/Layouts/AssignmentDetails';
import AssignmentForm from './assets/Components/Pages/Layouts/AssignmentForm';
import PendingAssignment from './assets/Components/Pages/Layouts/PendingAssignment';
import GiveMark from './assets/Components/Pages/Layouts/GiveMark';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/createAssignment',
        element: <PrivateRoute> <CreateAssignment></CreateAssignment> </PrivateRoute>
      },
      {
        path: '/assignments',
        element: <Assignments></Assignments>,
        loader: () => fetch('https://assignment-11-server-livid-pi.vercel.app/assignments')
      },
    
      {
        path: '/pendingAssignments',
        element: <PrivateRoute> <PendingAssignment></PendingAssignment>, </PrivateRoute>,
        loader: () => fetch('https://assignment-11-server-livid-pi.vercel.app/pendingAssignments')
      },
      {
        path: '/myAssignments',
        element: <PrivateRoute> <MyAssignment></MyAssignment> </PrivateRoute>,
        loader: () => fetch('https://assignment-11-server-livid-pi.vercel.app/myAssignments')
      },
      {
        path: '/updateAssignment/:id',
        element: <PrivateRoute> <UpdateAssignment></UpdateAssignment>, </PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-11-server-livid-pi.vercel.app/updateAssignment/${params.id}`)
      },
      {
        path: '/assignmentDetails/:id',
        element: <PrivateRoute> <AssignmentDetails></AssignmentDetails> </PrivateRoute>,
        loader: ({params}) => fetch(`https://assignment-11-server-livid-pi.vercel.app/singleAssignment/${params.id}`)
      },
      {
        path: '/assignmentForm/:id',
        element: <PrivateRoute> <AssignmentForm></AssignmentForm> </PrivateRoute>,
        loader: ({params}) => fetch(`https://assignment-11-server-livid-pi.vercel.app/singleAssignment/${params.id}`)
      },
      {
        path: '/giveMark/:id',
        element: <PrivateRoute> <GiveMark></GiveMark> </PrivateRoute>,
        loader: ({params}) => fetch(`https://assignment-11-server-livid-pi.vercel.app/giveMark/${params.id}`)
      },
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://assignment-11-server-livid-pi.vercel.app/allAssignment')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> <RouterProvider router={router}></RouterProvider> </AuthProvider>
  </React.StrictMode>,
)
