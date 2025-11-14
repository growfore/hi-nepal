"use server";

import { cookies } from "next/headers";

export async function getCookies() {
  return cookies();
}
export async function getCookie(key: string) {
  return cookies().get(key)?.value;
}

export async function setCookie(key: string, value: string) {
  cookies().set(key, value, { maxAge: 60 * 60 * 24 * 30 });
  return { key, value };
}

export async function deleteCookie(key: string) {
  cookies().delete(key);
  return { key };
}

export async function deleteAllCookies() {
  const res = cookies().delete;
  return { res };
}
