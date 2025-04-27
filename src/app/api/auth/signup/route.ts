import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { PrismaClient } from "@/generated/prisma";
import { hashPassword } from "../password-utils";

export const signupSchema = z.object({
	name: z.string().min(2, "Name must contain at least 2 characters"),
	phone: z.string().regex(/^\d{10,15}$/, "Phone must be 10-15 digits"),
	email: z.string().email("Invalid email address"),
	password: z.string().min(8, "Password must be at least 8 characters"),
});

export async function POST(request: NextRequest) {
	try {
		const prisma = new PrismaClient();
		const body = await request.json();

		// Validate
		const parsed = signupSchema.safeParse(body);
		if (!parsed.success) {
			return NextResponse.json(
				{
					message: "Validation error",
					errors: parsed.error.flatten().fieldErrors,
				},
				{ status: 400 },
			);
		}

		const { name, phone, email, password } = parsed.data;

		const isExisted = await prisma.user.findUnique({ where: { email } });
		if (isExisted) {
			return NextResponse.json(
				{ message: "Email already registered" },
				{ status: 409 },
			);
		}

		const hashedPassword = hashPassword(password);

		const user = await prisma.user.create({
			data: {
				name,
				phone,
				email,
				password: hashedPassword,
			},
		});

		return NextResponse.json({
			message: "User registered",
			userId: user.id,
		});
	} catch (error) {
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}
