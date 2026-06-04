console.log("USERS API LOADED");
import { db } from "@/db";
import { users } from "@/db/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  try {
    // Fixed Clerk's email path here:
    const userEmail = user.primaryEmailAddress?.emailAddress ?? "";

    const userResult = await db.select().from(users).where(
      eq(users.email, userEmail)
    );

    if (userResult.length === 0) {
      const newUser = await db.insert(users).values({
        email: userEmail,
        name: user.fullName ?? 'New User'
      }).returning();

      return NextResponse.json({ user: newUser[0] });
    } else {
      return NextResponse.json({ user: userResult[0] });
    }

  } catch (e) {
    console.log("Error Creating User: ", e);
    return NextResponse.json(
      { error: "Failed to create new user" }, 
      { status: 500 }
    );
  }
}