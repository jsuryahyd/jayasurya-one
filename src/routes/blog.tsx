import { Outlet } from "solid-start";
import WebsiteHeader from "~/components/Header/header";
import "./blog/blog.scss";
export default function UsersLayout() {
  return (
    <>
      <WebsiteHeader />
			<hr />
      <div class="blog">
        {/* <h1>Users</h1> */}
        <Outlet />
      </div>
    </>
  );
}
