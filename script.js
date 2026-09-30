const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const button = form.querySelector("button");
  button.disabled = true;
  button.textContent = "Sending...";

  const formData = new FormData(form);

  const data = {
    name: formData.get("Name"),
    email: formData.get("Email"),
    help: formData.get("Help needed"),
    message: formData.get("Message")
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Failed to send request");
    }

    alert("Your request has been sent successfully!");
    form.reset();
  } catch (error) {
    alert("Unable to send request. Please try again.");
  } finally {
    button.disabled = false;
    button.textContent = "Send Request";
  }
});

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const el = document.querySelector(a.getAttribute("href"));

    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
  });
});
