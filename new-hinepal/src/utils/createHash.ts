"use server";

import { createHash } from "node:crypto";

export const getKey = (text: string) => createHash("sha256").update(text).digest("hex");
