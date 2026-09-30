const form = document.querySelector("#helpForm");

if (form) {
  form.addEventListener("submit", async function (e) {
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
      console.error("Contact form error:", error);
      alert("Unable to send request. Please try again.");

    } finally {
      button.disabled = false;
      button.textContent = "Send Request";
    }
  });
}


document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (e) {
    const target = link.getAttribute("href");
    const element = document.querySelector(target);

    if (element) {
      e.preventDefault();

      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


const serviceContent = {
  website: {
    title: "Website Security",
    content:
      "<h3>Why does website security matter?</h3>" +
      "<p>Website security helps protect your website, visitors and business information from common security risks.</p>" +
      "<h3>What can website security help with?</h3>" +
      "<ul>" +
      "<li>Identify common security weaknesses.</li>" +
      "<li>Review important security headers.</li>" +
      "<li>Check authentication and access controls.</li>" +
      "<li>Reduce risks from unsafe configurations.</li>" +
      "<li>Protect sensitive information.</li>" +
      "</ul>" +
      "<div class='info-note'>Security testing should always be performed with authorization from the website or system owner.</div>"
  },

  assessment: {
    title: "Security Assessment",
    content:
      "<h3>What is a security assessment?</h3>" +
      "<p>A security assessment is a structured review of an application, website or system to identify security weaknesses.</p>" +
      "<h3>What does it review?</h3>" +
      "<ul>" +
      "<li>Application configuration.</li>" +
      "<li>Authentication and authorization.</li>" +
      "<li>Input handling.</li>" +
      "<li>Security headers.</li>" +
      "<li>Access-control practices.</li>" +
      "</ul>" +
      "<div class='info-note'>Assessments should only be conducted on systems where permission has been provided.</div>"
  },

  incident: {
    title: "Incident Guidance",
    content:
      "<h3>What is incident guidance?</h3>" +
      "<p>Incident guidance helps individuals understand suspicious activity and take appropriate steps to protect their accounts and systems.</p>" +
      "<h3>Common situations include:</h3>" +
      "<ul>" +
      "<li>Suspicious account activity.</li>" +
      "<li>Phishing messages.</li>" +
      "<li>Compromised accounts.</li>" +
      "<li>Unexpected website changes.</li>" +
      "<li>Unusual system activity.</li>" +
      "</ul>" +
      "<div class='info-note'>Never share passwords, OTPs or recovery codes with anyone providing assistance.</div>"
  },

  awareness: {
    title: "Security Awareness",
    content:
      "<h3>Why is security awareness important?</h3>" +
      "<p>Security awareness helps people recognize common risks such as phishing, unsafe links and suspicious login requests.</p>" +
      "<h3>Good security habits include:</h3>" +
      "<ul>" +
      "<li>Use strong, unique passwords.</li>" +
      "<li>Enable multi-factor authentication.</li>" +
      "<li>Verify unexpected links and attachments.</li>" +
      "<li>Keep software updated.</li>" +
      "<li>Never share OTPs or recovery codes.</li>" +
      "</ul>" +
      "<div class='info-note'>Good security awareness can reduce common security risks.</div>"
  }
};


document.querySelectorAll(".service-card").forEach(function (card) {
  card.addEventListener("click", function () {

    const serviceKey = card.dataset.info;
    const service = serviceContent[serviceKey];

    if (!service) {
      return;
    }

    const infoSection = document.querySelector("#service-info");
    const title = document.querySelector("#info-title");
    const content = document.querySelector("#info-content");

    if (!infoSection || !title || !content) {
      return;
    }

    title.textContent = service.title;
    content.innerHTML = service.content;

    infoSection.classList.remove("hidden");

    infoSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});
/* ===== CYBER MOUSE GLOW ===== */

const cyberWallpaper = document.querySelector(".cyber-wallpaper");

if (cyberWallpaper) {
  document.addEventListener("mousemove", function (e) {

    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    cyberWallpaper.style.setProperty("--mouse-x", x + "%");
    cyberWallpaper.style.setProperty("--mouse-y", y + "%");

  });
}
