import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>
        <Link href="/admin/logout">Logout</Link>
      </p>
    </div>
  );
}
