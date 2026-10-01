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


/* Smooth navigation */
document.addEventListener("click", function (e) {

  const link = e.target.closest('a[href^="#"]');

  if (!link) return;

  const target = link.getAttribute("href");

  if (!target || target === "#") return;

  const element = document.querySelector(target);

  if (!element) return;

  e.preventDefault();

  element.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});


/* Service information */
const serviceContent = {

  website: {
    title: "Website Security",
    content: `
      <h3>Why does website security matter?</h3>
      <p>Website security helps protect your website, visitors and business information from common security risks.</p>

      <h3>What can website security help with?</h3>
      <ul>
        <li>Identify common security weaknesses.</li>
        <li>Review important security headers.</li>
        <li>Check authentication and access controls.</li>
        <li>Reduce risks from unsafe configurations.</li>
        <li>Protect sensitive information.</li>
      </ul>

      <div class="info-note">
        Security testing should always be performed with authorization from the website or system owner.
      </div>
    `
  },

  assessment: {
    title: "Security Assessment",
    content: `
      <h3>What is a security assessment?</h3>
      <p>A security assessment is a structured review of an application, website or system to identify security weaknesses.</p>

      <h3>What does it review?</h3>
      <ul>
        <li>Application configuration.</li>
        <li>Authentication and authorization.</li>
        <li>Input handling.</li>
        <li>Security headers.</li>
        <li>Access-control practices.</li>
      </ul>

      <div class="info-note">
        Assessments should only be conducted on systems where permission has been provided.
      </div>
    `
  },

  incident: {
    title: "Incident Guidance",
    content: `
      <h3>What is incident guidance?</h3>
      <p>Incident guidance helps individuals understand suspicious activity and take appropriate steps to protect their accounts and systems.</p>

      <h3>Common situations include:</h3>
      <ul>
        <li>Suspicious account activity.</li>
        <li>Phishing messages.</li>
        <li>Compromised accounts.</li>
        <li>Unexpected website changes.</li>
        <li>Unusual system activity.</li>
      </ul>

      <div class="info-note">
        Never share passwords, OTPs or recovery codes with anyone providing assistance.
      </div>
    `
  },

  awareness: {
    title: "Security Awareness",
    content: `
      <h3>Why is security awareness important?</h3>
      <p>Security awareness helps people recognize common risks such as phishing, unsafe links and suspicious login requests.</p>

      <h3>Good security habits include:</h3>
      <ul>
        <li>Use strong, unique passwords.</li>
        <li>Enable multi-factor authentication.</li>
        <li>Verify unexpected links and attachments.</li>
        <li>Keep software updated.</li>
        <li>Never share OTPs or recovery codes.</li>
      </ul>

      <div class="info-note">
        Good security awareness can reduce common security risks.
      </div>
    `
  },

  network: {
    title: "Network Security",
    content: `
      <h3>What is network security?</h3>
      <p>Network security focuses on protecting connected systems and communications from common security risks.</p>

      <h3>What can be reviewed?</h3>
      <ul>
        <li>Network configuration.</li>
        <li>Firewall and access-control settings.</li>
        <li>Common exposure risks.</li>
        <li>Secure communication practices.</li>
        <li>Basic network protection controls.</li>
      </ul>

      <div class="info-note">
        Network testing should only be performed with authorization from the network owner.
      </div>
    `
  },

  account: {
    title: "Account Security",
    content: `
      <h3>How can account security help?</h3>
      <p>Account security guidance helps reduce the risk of unauthorized access to online accounts.</p>

      <h3>Common protection steps include:</h3>
      <ul>
        <li>Use strong and unique passwords.</li>
        <li>Enable multi-factor authentication.</li>
        <li>Review active sessions and devices.</li>
        <li>Check account recovery options.</li>
        <li>Recognize suspicious login activity.</li>
      </ul>

      <div class="info-note">
        Never share passwords, OTPs or recovery codes with anyone.
      </div>
    `
  },

  phishing: {
    title: "Phishing & Scam Analysis",
    content: `
      <h3>What is phishing?</h3>
      <p>Phishing attempts often use fake messages, links or websites to trick people into revealing information or taking unsafe actions.</p>

      <h3>What can be reviewed?</h3>
      <ul>
        <li>Suspicious emails and messages.</li>
        <li>Unexpected links.</li>
        <li>Fake login pages.</li>
        <li>Suspicious website indicators.</li>
        <li>Common scam patterns.</li>
      </ul>

      <div class="info-note">
        Do not provide passwords, OTPs or financial information while investigating a suspicious message.
      </div>
    `
  },

  malware: {
    title: "Malware & Virus Guidance",
    content: `
      <h3>What is malware?</h3>
      <p>Malware is software designed to perform unwanted or harmful actions on a device or system.</p>

      <h3>Guidance can include:</h3>
      <ul>
        <li>Recognizing suspicious software.</li>
        <li>Reviewing unusual device behavior.</li>
        <li>Keeping operating systems updated.</li>
        <li>Using trusted security software.</li>
        <li>Improving basic device protection.</li>
      </ul>

      <div class="info-note">
        Do not install unknown software or follow instructions from untrusted sources.
      </div>
    `
  },

  privacy: {
    title: "Privacy Protection",
    content: `
      <h3>Why does privacy protection matter?</h3>
      <p>Privacy protection helps reduce unnecessary exposure of personal information across websites, apps and online accounts.</p>

      <h3>Useful privacy practices include:</h3>
      <ul>
        <li>Review app permissions.</li>
        <li>Check account privacy settings.</li>
        <li>Limit unnecessary personal information sharing.</li>
        <li>Use secure authentication methods.</li>
        <li>Review connected applications regularly.</li>
      </ul>

      <div class="info-note">
        Avoid sharing sensitive personal information unless it is genuinely required.
      </div>
    `
  },

  social: {
    title: "Social Media Security",
    content: `
      <h3>How can social media security help?</h3>
      <p>Social media security focuses on protecting accounts from unauthorized access, impersonation and suspicious activity.</p>

      <h3>Protection can include:</h3>
      <ul>
        <li>Enabling multi-factor authentication.</li>
        <li>Reviewing logged-in devices.</li>
        <li>Checking privacy settings.</li>
        <li>Securing recovery information.</li>
        <li>Recognizing fake profiles and phishing attempts.</li>
      </ul>

      <div class="info-note">
        Never share social media passwords, OTPs or recovery codes.
      </div>
    `
  },

  data: {
    title: "Data Protection",
    content: `
      <h3>What is data protection?</h3>
      <p>Data protection focuses on reducing unauthorized access, accidental exposure and loss of important information.</p>

      <h3>Protection practices include:</h3>
      <ul>
        <li>Use appropriate access controls.</li>
        <li>Keep important software updated.</li>
        <li>Maintain secure backups.</li>
        <li>Protect sensitive files.</li>
        <li>Review who can access important information.</li>
      </ul>

      <div class="info-note">
        Sensitive information should only be shared with trusted and authorized parties.
      </div>
    `
  }

};


/* Service card click */
document.addEventListener("click", function (e) {

  const card = e.target.closest(".service-card");

  if (!card) return;

  const serviceKey = card.dataset.info;
  const service = serviceContent[serviceKey];

  if (!service) return;

  const infoSection = document.querySelector("#service-info");
  const title = document.querySelector("#info-title");
  const content = document.querySelector("#info-content");

  if (!infoSection || !title || !content) return;

  title.textContent = service.title;
  content.innerHTML = service.content;

  infoSection.classList.remove("hidden");

  setTimeout(function () {
    infoSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 50);

});


/* Mouse background effect */
const cyberWallpaper = document.querySelector(".cyber-wallpaper");

if (cyberWallpaper) {

  document.addEventListener("mousemove", function (e) {

    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    cyberWallpaper.style.setProperty("--mouse-x", x + "%");
    cyberWallpaper.style.setProperty("--mouse-y", y + "%");

  });

}
