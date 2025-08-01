import { nanoid } from "nanoid";
import { db } from "../client";

export async function countAllUsers() {
	return await db.user.count();
}

export async function getUserById(id: string) {
	return await db.user.findUnique({
		where: {
			id,
		},
	});
}

export async function getUserByEmail(email: string) {
	return await db.user.findUnique({
		where: {
			email,
		},
	});
}

