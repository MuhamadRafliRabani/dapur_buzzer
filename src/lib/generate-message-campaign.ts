import { CFType } from "@/type";

export const generateWaUrl = (form: CFType) => {
  const message = `
Halo Dapur Buzzer Indonesia!
Saya tertarik untuk membuat Campaign dengan detail seperti dibawah ini :

Nama Brand / Olshop : *${form.brand}*
Platform Promosi : ${form.platform}
Media Promosi : ${form.media}
Jenis Promosi : ${form.jenisPromosi}
Jenis Konten : ${form.jenisKonten}
Jumlah Talent : ${form.jumlahTalent}
Minimal Followers : ${form.minFollowers}
Jenis Kelamin : ${form.gender}
Budget : Rp. ${form.budget}

Mohon infokan tahapanya. Terima Kasih.
`.trim();

  return (
    `https://api.whatsapp.com/send?phone=6281356785992&text=` +
    encodeURIComponent(message)
  );
};
