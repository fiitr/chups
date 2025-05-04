import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

export async function GET() {

  try{
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
      where: {
        NOT: {
          EnrollmentNo: "22323004"
        }
      }
    });
    
    return NextResponse.json(mostVisited, {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, max-age=0',
      },
    });
  } catch (error) {
    console.error("Error fetching most visited users:", error);
    return NextResponse.json({ message: 'Error fetching data' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
