"use server";

import nodemailer from "nodemailer";

export interface DailyBookingData {
    startDate: string;
    endDate: string;
    equipment: string;
    kegDetails: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    postalCode: string;
}

export async function sendDailyBooking(data: DailyBookingData): Promise<{ success: boolean; error?: string }> {
    const {
        SMTP_HOST,
        SMTP_PORT,
        SMTP_USER,
        SMTP_PASS,
        BOOKING_EMAIL_TO,
    } = process.env;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !BOOKING_EMAIL_TO) {
        console.error("Missing SMTP environment variables. Check .env.local");
        return { success: false, error: "Server configuration error." };
    }

    const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: parseInt(SMTP_PORT ?? "587"),
        secure: SMTP_PORT === "465",
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASS,
        },
    });

    const equipmentLabel: Record<string, string> = {
        "1_tap": "Tireuse 1 bec",
        "2_tap": "Tireuse 2 becs",
        "advice": "Demande de conseil",
    };

    const html = `
<h2>🍺 Nouvelle demande de réservation journalière</h2>
<hr/>
<h3>📅 Dates</h3>
<ul>
  <li><strong>Début :</strong> ${data.startDate}</li>
  <li><strong>Fin :</strong> ${data.endDate}</li>
</ul>
<h3>🔧 Équipement</h3>
<p>${equipmentLabel[data.equipment] ?? data.equipment}</p>
<h3>🍻 Fûts souhaités</h3>
<p>${data.kegDetails || "Aucun détail fourni."}</p>
<h3>👤 Client</h3>
<ul>
  <li><strong>Nom :</strong> ${data.firstName} ${data.lastName}</li>
  <li><strong>Téléphone :</strong> ${data.phone}</li>
  <li><strong>Courriel :</strong> <a href="mailto:${data.email}">${data.email}</a></li>
  <li><strong>Adresse :</strong> ${data.address}, ${data.city}, ${data.postalCode}</li>
</ul>
`;

    try {
        await transporter.sendMail({
            from: `"Site LTDF" <${SMTP_USER}>`,
            to: BOOKING_EMAIL_TO,
            replyTo: data.email,
            subject: `[LTDF] Nouvelle réservation journalière — ${data.firstName} ${data.lastName}`,
            html,
        });

        return { success: true };
    } catch (err) {
        console.error("Email send error:", err);
        return { success: false, error: "Failed to send email." };
    }
}
