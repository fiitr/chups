import axios from "axios";
import type { AxiosRequestConfig } from "axios";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();


export async function POST(request: Request) {
  const data = await request.json();
  const user = await prisma.user.findUnique({
    where: {
      EnrollmentNo: data.enr,
    },
  });

  console.log("user", user);

  if(user != null){
    const visits = user.visits + 1;
    await prisma.user.update({
      where: {
        EnrollmentNo: data.enr,
      },
      data: {
        visits: visits,
      },
    });
  }




  await prisma.$disconnect();
  return NextResponse.json({ message_for_devtool_users:"go touch grass",user}, { status: 200 });
};
