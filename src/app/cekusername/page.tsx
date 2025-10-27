"use client";

import { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Instagram, Loader2 } from "lucide-react";

type IGResponse = {
  full_name: string;
  follower_count: number;
  following_count: number;
  media_count: number;
  is_private: boolean;
  spam_follower_setting_enabled: boolean | null;
};

const InstagramUsernameCheck = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<IGResponse | null>(null);

  const getInfo = async () => {
    if (!username) return;
    setLoading(true);
    try {
      const { data } = await axios.post(`/api/instagram/`, { username });

      setData(data?.data);
    } catch (err) {
      console.log(err);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
      <h2 className="text-xl font-semibold mb-6">
        <Instagram className="size-5" /> Check Username Instagram
      </h2>

      <div className="flex gap-3">
        <Input
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button onClick={getInfo} disabled={loading}>
          {loading ? <Loader2 className="animate-spin size-5" /> : "Get Info"}
        </Button>
      </div>

      {data && (
        <table className="w-full mt-8 border border-gray-200 rounded-lg overflow-hidden">
          <tbody className="text-sm">
            <tr className="border-b">
              <td className="p-3 font-medium">Nama Lengkap</td>
              <td className="p-3">{data.full_name}</td>
            </tr>

            <tr className="border-b">
              <td className="p-3 font-medium">Follower Count</td>
              <td className="p-3">{data.follower_count}</td>
            </tr>

            <tr className="border-b">
              <td className="p-3 font-medium">Following Count</td>
              <td className="p-3">{data.following_count}</td>
            </tr>

            <tr className="border-b">
              <td className="p-3 font-medium">Post Count</td>
              <td className="p-3">{data.media_count}</td>
            </tr>

            <tr className="border-b">
              <td className="p-3 font-medium">Private</td>
              <td className="p-3">
                {data.is_private ? (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs">
                    private is ON
                  </span>
                ) : (
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">
                    private is OFF
                  </span>
                )}
              </td>
            </tr>

            <tr>
              <td className="p-3 font-medium">Spam Settings</td>
              <td className="p-3">
                {data.spam_follower_setting_enabled == true ? (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs">
                    Spam filter is ON
                  </span>
                ) : (
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">
                    Spam filter is OFF
                  </span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};
export default InstagramUsernameCheck;
