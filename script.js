const form = document.querySelector("#helpForm");

if (form) {
form.addEventListener("submit", async (e) => {
e.preventDefault();

```
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
```

});
}

// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach((link) => {
link.addEventListener("click", (e) => {
const target = link.getAttribute("href");
const element = document.querySelector(target);

```
if (element) {
  e.preventDefault();

  element.scrollIntoView({
    behavior: "smooth"
  });
}
```

});
});

// Service awareness content

const serviceContent = {
website: {
title: "Website Security",
content: ` <h3>Why does website security matter?</h3>

```
  <p>
    Website security helps protect your website, visitors and business
    information from common security risks. A secure website also helps
    maintain user trust and reduce the chance of unauthorized access.
  </p>

  <h3>What can website security help with?</h3>

  <ul>
    <li>Identify common security weaknesses and configuration issues.</li>
    <li>Review important security headers and browser protections.</li>
    <li>Check authentication and access-control practices.</li>
    <li>Reduce risks from outdated software and unsafe configurations.</li>
    <li>Protect sensitive information handled by the website.</li>
    <li>Improve monitoring and security response practices.</li>
  </ul>

  <div class="info-note">
    Security testing should always be performed with authorization from
    the website or system owner.
  </div>
`
```

},

assessment: {
title: "Security Assessment",
content: ` <h3>What is a security assessment?</h3>

```
  <p>
    A security assessment is a structured review of an application,
    website or system to identify security weaknesses and areas that
    need improvement.
  </p>

  <h3>What does an assessment typically review?</h3>

  <ul>
    <li>Application configuration and security controls.</li>
    <li>Authentication and authorization mechanisms.</li>
    <li>Input handling and common application risks.</li>
    <li>Security headers and exposed services.</li>
    <li>Access-control and data-protection practices.</li>
    <li>Clear findings with practical remediation guidance.</li>
  </ul>

  <div class="info-note">
    Assessments should only be conducted on systems where explicit
    permission has been provided.
  </div>
`
```

},

incident: {
title: "Incident Guidance",
content: ` <h3>What is incident guidance?</h3>

```
  <p>
    Incident guidance helps individuals or organizations understand
    suspicious activity and take appropriate steps to protect their
    accounts and systems.
  </p>

  <h3>Common situations include:</h3>

  <ul>
    <li>Suspicious account activity or unexpected login alerts.</li>
    <li>Possible phishing messages or fraudulent emails.</li>
    <li>Compromised or lost accounts.</li>
    <li>Unexpected website changes or suspicious content.</li>
    <li>Unusual application or system activity.</li>
    <li>Basic recovery, containment and security-improvement guidance.</li>
  </ul>

  <div class="info-note">
    Never share passwords, OTPs, recovery codes or private keys with
    anyone providing assistance.
  </div>
`
```

},

awareness: {
title: "Security Awareness",
content: ` <h3>Why is security awareness important?</h3>

```
  <p>
    Security awareness helps people recognize common risks such as
    phishing, unsafe links, reused passwords and suspicious login
    requests.
  </p>

  <h3>Good security habits include:</h3>

  <ul>
    <li>Use strong, unique passwords for important accounts.</li>
    <li>Enable multi-factor authentication whenever available.</li>
    <li>Verify unexpected links, attachments and login requests.</li>
    <li>Keep operating systems, browsers and applications updated.</li>
    <li>Never share OTPs, passwords or recovery codes.</li>
    <li>Review account login activity and security notifications.</li>
  </ul>

  <div class="info-note">
    Good security awareness can reduce the chance of phishing,
    account compromise and other common security incidents.
  </div>
`
```

}
};

// Service card click handling

document.querySelectorAll(".service-card").forEach((card) => {
card.addEventListener("click", () => {

```
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
```

});
});


