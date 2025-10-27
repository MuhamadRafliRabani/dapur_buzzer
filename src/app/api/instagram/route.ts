import { NextResponse } from "next/server";
import axios, { AxiosError } from "axios";

export async function POST(req: Request) {
  try {
    const { username } = await req.json();

    if (!username) {
      return NextResponse.json({ error: "username required" }, { status: 400 });
    }

    const res = await axios.post(
      "https://sprintpedia-proxy.vercel.app/api/sprintpedia",
      { username },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    return NextResponse.json(res.data);
  } catch (e) {
    const error = e as AxiosError;
    return NextResponse.json(
      {
        error: "fetch failed",
        detail: error.response?.data || error.message,
      },
      { status: 500 }
    );
  }
}
