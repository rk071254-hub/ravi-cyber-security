export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, help, message } = req.body;

    if (!name || !email || !help || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: ["rk071254@gmail.com"],
        reply_to: email,
        subject: `New Security Help Request - ${help}`,
        text:
          `Name: ${name}\n` +
          `Email: ${email}\n` +
          `Help needed: ${help}\n\n` +
          `Message:\n${message}`
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    return res.status(200).json({ success: true });

  } catch (error) {
    return res.status(500).json({
      error: "Unable to send request"
    });
  }
}
