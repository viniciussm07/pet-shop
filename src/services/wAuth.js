import React, { useEffect, useState } from "react";
import api from "./api";
import { login, logout, getToken, setIsLoggedIn } from "./auth";
import { useRouter } from "next/router";

export default function WAuth() {
  const router = useRouter();

  useEffect(() => {
    async function verify() {
      const token = getToken();
      if (token != null) {
        const response = await api.get("/customer/auth/checkToken", {
          params: { token: token },
        });
        if (response.data.status === 200) {
          setIsLoggedIn(true);
        } else {
          logout();
          setIsLoggedIn(false);
        }
      } else {
        setIsLoggedIn(false);
      }
    }

    verify();
  });
}
