import React from "react";
import { copyFile } from "fs";

export default function Footer() {
  return (
    <footer className="bg-dark text white mt-5 p-4 text-center">
      Copyright &copy;
      {new Date().getFullYear()} SocialMedia
    </footer>
  );
}
