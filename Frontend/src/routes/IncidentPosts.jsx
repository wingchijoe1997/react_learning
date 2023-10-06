import { Outlet } from 'react-router-dom';
import PostsList from '../components/PostsList'

function IncidentPosts() {
  
  return (
    <>
       <Outlet></Outlet>
      <main>
        <PostsList></PostsList>
      </main>

    </>
  );
}

export default IncidentPosts;

export async function loader() {
  const response = await fetch('http://localhost:8080/incidentPosts')
  const resData = await response.json();
  return resData.posts;
}

