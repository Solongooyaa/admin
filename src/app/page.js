"use client";
import Image from "next/image";
import "./style.css";
import User from "./user.js";
import users from "./users.json";
export default function Home() {
  console.log(users);
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}
