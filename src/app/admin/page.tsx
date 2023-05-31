import Link from "next/link";

function Page() {
  return (
    <div>
      <h1>Only logged in users can view this page</h1>
      <p>
        <Link href="/admin/dashboard">Dashboard</Link>
      </p>
    </div>
  );
}

export default Page;
