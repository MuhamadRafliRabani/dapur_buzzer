import { useState } from "react";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Button } from "./ui/button";

const ValidasiAccount = ({ setStep }: { setStep: (param: number) => void }) => {
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("male");
  // const [data, setData] = useState<VAType>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // const response = await validateProfil(username);

    // if (response) {
    //   setData(response);
    // }
  };

  // console.log(data);

  return (
    <div className="flex justify-center bg-muted/30 py-3 px-2">
      <div className="max-w-md w-full border border-border shadow-sm rounded-3xl p-4 space-y-5">
        <div>
          <h1 className="text-center text-lg font-bold text-foreground">
            Validasi Akun Instagram
          </h1>
          <p className="text-center text-muted-foreground text-md mt-2">
            Masukkan username Instagram kamu untuk memeriksa apakah akun kamu
            sudah memenuhi syarat dan kriteria bergabung di Dapur Buzzer.
          </p>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Input */}
            <div className="space-y-2">
              <label htmlFor="username" className="text-foreground text-md ">
                Username Instagram
              </label>
              <div className="flex items-center rounded-xl border border-input px-3 py-2 bg-background mt-1">
                <span
                  className={`${
                    username == "" ? "text-accent/70" : "text-accent"
                  } me-[1px]`}
                >
                  @
                </span>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) =>
                    setUsername(e.target.value.replace(/^@/, ""))
                  }
                  placeholder="username"
                  className="flex-1 bg-transparent outline-none text-accent/90 placeholder:text-accent/70"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Contoh: dapurbuzzer, tanpa @ dan bukan link profil.
              </p>
            </div>

            {/* Gender Radio */}
            <div className="space-y-3">
              <label className="text-foreground ">Jenis Kelamin</label>
              <RadioGroup
                defaultValue={gender}
                onValueChange={setGender}
                className="flex gap-6 mt-1 text-md"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="male"
                    id="male"
                    className="text-primary"
                  />
                  <label htmlFor="male">Laki-laki</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="female"
                    id="female"
                    className="text-primary"
                  />
                  <label htmlFor="female">Perempuan</label>
                </div>
              </RadioGroup>
            </div>
          </form>
        </div>

        <div className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            className="flex-1 border border-primary text-foreground"
            onClick={() => setStep(2)}
          >
            Kembali
          </Button>
          <Button
            type="submit"
            onClick={handleSubmit}
            className="flex-1 bg-primary text-accent-foreground hover:bg-accent-foreground hover:text-primary hover:border hover:border-primary"
          >
            Cek Sekarang
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ValidasiAccount;
