import Link from "next/link";

export default function Menu(){
  return (
    <div>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/profile">Profile</Link></li>
        <li><Link href="/users">Users</Link></li>
        {/* <li><Link href="/users/detail">User Detail</Link></li> */}
      </ul>
    </div>
  );
}