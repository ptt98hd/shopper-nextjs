import { scryptSync } from "crypto";

export function hashPassword(password: string): string {
	const hashed = scryptSync(password, "", 64).toString("hex");
	return hashed;
}

export function verifyPassword(
	password: string,
	hashedPassword: string,
): boolean {
	const [salt, storedHash] = hashedPassword.split(":");

	const hash = scryptSync(password, salt, 64).toString("hex");

	return hash === storedHash;
}
