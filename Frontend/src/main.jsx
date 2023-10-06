import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import IncidentPosts,{loader as incidentLoader} from './routes/IncidentPosts'
import Posts,{ loader as postsLoader} from './routes/Posts'

import NewPost,{action as newPostAction} from './routes/NewPost'
import NewIncidentPost,{action as newIncidentPostAction} from './routes/NewPost'

import PostDetails,{ loader as postDetailsLoader,loader2 as incidentPostDetailLoader } from './routes/PostDetails';
import RootLayout from './routes/RootLayout'
import './index.css'

const router = createBrowserRouter([
  { path:'/', element:<RootLayout/>, children:[
    { 
      path:'/', 
      element:<Posts/>,
      loader:postsLoader, 
      children:[
        { path:'/create-post', element:<NewPost/>,action:newPostAction},
        { path:'/:postId', element:<PostDetails/>, loader:postDetailsLoader}
      ]}
  ]},

  { path:'/incidentPost', element:<RootLayout/>, children:[
    { 
      path:'/incidentPost', 
      element:<IncidentPosts/>,
      loader:incidentLoader, 
     /* children:[
        { path:'/create-post', element:<NewPost/>,action:newIncidentPostAction},
        { path:'/:postId', element:<PostDetails/>, loader:incidentPostDetailLoader}
      ]*/
    },
  ]}


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
