"use client";
import Image from "next/image";
import "./style.css";
import User from "./user.js";
import USERS from "./users.json";
export default function Home() {
  return (
    <div>
      {USERS.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}
