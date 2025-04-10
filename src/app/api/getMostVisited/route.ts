import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const mostVisited = await prisma.user.findMany({
    orderBy: {
      visits: "desc",
    },
    take: 50, // Fetch top 10 most visited users
    select: {
      EnrollmentNo: true,
      Name: true,
      visits: true,
      StPic: true,
    },
  });

  const mv = mostVisited.filter((user) => user.EnrollmentNo !== "22323004");

  await prisma.$disconnect();
  return NextResponse.json(mv);
}