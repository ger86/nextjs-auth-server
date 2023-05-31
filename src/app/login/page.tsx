"use client";

import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/contexts/authContext";
import Cookies from "js-cookie";
import Link from "next/link";

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();
  const { login } = useAuthContext();

  const handleForm = async (event: FormEvent) => {
    event.preventDefault();

    const response = await fetch(
      "https://librarify.latteandfront.es/api/login_check",
      {
        method: "POST",
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      }
    );

    if (!response.ok) {
      return console.log("Error");
    }

    const tokens = await response.json();
    login(tokens.data);

    router.push("/admin");
  };
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">Sign up</h1>
        <form onSubmit={handleForm} className="form">
          <label htmlFor="email">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </label>
          <button type="submit">Sign up</button>
        </form>
      </div>
      <Link href="/admin/dashboard">Dashboard</Link>
    </div>
  );
}

export default Page;
