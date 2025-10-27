import { VAType } from "@/type";
import axios from "axios";

export async function validateProfil(
  username: string
): Promise<VAType | false> {
  if (!username) return false;
  try {
    const { data } = await axios.post(
      "https://dapurbuzzer.co.id/join/check_instagram.php",
      {
        username,
      }
    );

    if (data) {
      return data;
    }

    return false;
  } catch (error) {
    throw error;
    // return false
  }
}
