'use server';

import { cookies } from 'next/headers';

export async function getCookies() {
  return cookies();
}
export async function getCookie(key: string) {
  return cookies().get(key)?.value;
}

export async function setCookie(key: string, value: string) {
  cookies().set(key, value);
  return { key, value };
}

export async function deleteCookie(key: string) {
  cookies().delete(key);
  return { key };
}

export async function deleteAllCookies() {
  cookies().delete;
  return {};
}
