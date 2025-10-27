const Join = ({ setStep }: { setStep: (param: number) => void }) => {
  return (
    <div className="min-h-screen flex items-center justify-center py-3 px-2">
      <div className="max-w-lg w-full bg-accent-foreground rounded-3xl shadow-sm border border-gray-100 p-4">
        {/* Header */}
        <h1 className="text-lg font-bold text-center text-accent">
          Join Talent
        </h1>
        <p className="text-center text-accent/90 mt-3 text-md">
          Jadilah bagian dari <strong>Buzzer</strong>,{" "}
          <strong>Influencer</strong>, atau <strong>KOL</strong> di{" "}
          <strong>Dapur Buzzer</strong>, dan dapatkan penghasilan tambahan dari
          rumah melalui kampanye brand ternama.
        </p>

        {/* Benefit Section */}
        <div className="bg-accent/5 rounded-2xl p-4 mt-8">
          <h2 className=" font-semibold text-primary mb-3">
            Raih Peluang & Penghasilan Tambahan di Dapur Buzzer!
          </h2>

          <p className="text-accent/90 font-medium mb-3 text-md">
            Apa yang kamu dapatkan?
          </p>

          <ul className="space-y-2 text-accent/70 text-sm">
            {[
              "Memperoleh penghasilan tambahan secara fleksibel",
              "Bebas potongan fee atau biaya manajemen",
              "Meningkatkan reputasi serta portofolio profesional",
              "Job sederhana, fee kompetitif, dan pencairan cepat",
              "Beragam keuntungan menarik lainnya",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-600 mt-2"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setStep(2)}
            className="bg-primary hover:bg-accent-foreground hover:text-primary hover:border hover:border-primary text-accent-foreground font-semibold py-3 px-8 rounded-xl w-full transition-all"
          >
            Join Sekarang
          </button>
          <p className="text-xs text-gray-500 mt-2">
            Proses online, cepat dan sepenuhnya gratis tanpa biaya apa pun.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Join;
