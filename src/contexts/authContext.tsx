"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
} from "react";
import Cookies from "js-cookie";

type AuthTokens = {
  token: string;
  refresh_token: string;
};

const AUTH_TOKENS_KEY = "NEXT_JS_AUTH";

export const AuthContext = createContext({
  login: (authTokens: AuthTokens) => {},
  logout: () => {},
});

export default function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const authTokensInLocalStorage = Cookies.get("authTokens");

  const login = useCallback(function (authTokens: AuthTokens) {
    Cookies.set("authTokens", JSON.stringify(authTokens));
  }, []);

  const logout = useCallback(function () {
    Cookies.remove("authTokens");
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
    }),
    [login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
