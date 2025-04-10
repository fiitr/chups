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
//   const user = await prisma.user.findUnique({
//     where: {
//       EnrollmentNo: request.data.enr,
//     },
//   });
  await prisma.$disconnect();
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
};
