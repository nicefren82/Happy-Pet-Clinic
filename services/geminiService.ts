import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Anda adalah asisten virtual veteriner senior untuk 'Happy Pet Clinic' yang berlokasi di Kota Jambi.

INFORMASI KLINIK:
- Nama: Happy Pet Clinic.
- Alamat: Jl. Hayam Wuruk No. 14, Jelutung, Kota Jambi.
- Jam Praktik: Senin s/d Minggu, 09:00 - 21:00 WIB.
- UGD: Buka 24 Jam.
- Kontak WA: 082280482089.

LAYANAN UTAMA:
1. GRATIS KONSULTASI.
2. Cek Up & Control Healthy.
3. UGD & Rawat Inap/Jalan.
4. Bedah/Operasi (Besar/Kecil) & Sterilisasi (Jantan/Betina).
5. Melahirkan (Normal & Caesar/SC).
6. Vaksinasi (Lengkap & Rabies).
7. USG & Pemeriksaan Lab.
8. Titip Sehat (Boarding).
9. Mandi/Grooming Treatment (Kutu, Jamur, Exim).

TUGAS ANDA:
1. Menjawab pertanyaan pemilik hewan dengan ramah dan profesional.
2. Jika user bertanya jadwal atau lokasi, berikan informasi di atas.
3. Selalu tawarkan "GRATIS KONSULTASI" dan arahkan untuk booking via WhatsApp di 082280482089 jika kasusnya butuh penanganan fisik.
4. Lakukan triase awal. Jika kondisi gawat (kejang, sesak, pendarahan), suruh segera bawa ke UGD kami (24 Jam).

PENTING:
- Gunakan bahasa Indonesia yang ramah (sapaan Kak/Bapak/Ibu).
- Sertakan disclaimer bahwa Anda adalah AI.
- Jangan berikan resep obat keras.
`;

export const sendMessageToGemini = async (history: { role: string; parts: { text: string }[] }[], newMessage: string): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 500,
      },
      history: history,
    });

    const result = await chat.sendMessage({
      message: newMessage
    });

    return result.text || "Maaf, saya tidak dapat memproses permintaan Anda saat ini.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Terjadi kesalahan koneksi. Mohon periksa internet Anda atau coba sesaat lagi.";
  }
};