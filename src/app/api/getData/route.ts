import axios from "axios";
import type { AxiosRequestConfig } from "axios";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

const basicAxios = async (
  endpoint: string,
  options?: AxiosRequestConfig
) => {
  const headers = options?.headers || {
    "Content-Type": "application/json",
  };
  const res = await axios(endpoint, {
    method: "GET",
    headers: headers,
    ...options,
  });

  return res;
};

export async function POST(request: Request) {
  const data = await request.json();
  const user = await prisma.user.findUnique({
    where: {
      EnrollmentNo: data.enr,
    },
  });
  // console.log()
  await prisma.$disconnect();
  console.log(1,user)
  return NextResponse.json({ user}, { status: 200 });
};
