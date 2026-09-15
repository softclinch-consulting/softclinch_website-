type ContactReplyTemplateInput = {
  name: string;
  company: string;
  phone: string;
  message: string;
  industry?: string;
  service?: string;
  timeline?: string;
  budget?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderOptionalHtmlRow(label: string, value?: string) {
  if (!value) {
    return "";
  }

  return `
    <tr>
      <td style="padding: 0 0 12px; color: #475569; font-size: 14px; width: 120px;"><strong>${escapeHtml(label)}:</strong></td>
      <td style="padding: 0 0 12px; color: #0f172a; font-size: 14px;">${escapeHtml(value)}</td>
    </tr>
  `;
}

function renderOptionalTextRow(label: string, value?: string) {
  return value ? `${label}: ${value}` : null;
}

export function buildCustomerReplyEmailContent(
  input: ContactReplyTemplateInput
) {
  const subject = "Thank you for contacting SoftClinch Consulting Services";
  const htmlContent = `
    <html>
      <body style="margin: 0; padding: 24px; background: #f8fafc; font-family: Arial, Helvetica, sans-serif; color: #0f172a;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 20px; overflow: hidden; border: 1px solid #e2e8f0;">
          <tr>
            <td style="padding: 28px 32px; background: linear-gradient(135deg, #0f2747 0%, #1e3a5f 100%); color: #ffffff;">
              <p style="margin: 0 0 10px; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; opacity: 0.8;">SoftClinch Consulting Services</p>
              <h1 style="margin: 0; font-size: 28px; line-height: 1.25;">Thank you for reaching out</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 32px;">
              <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.7;">Hi ${escapeHtml(input.name)},</p>
              <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.7;">
                We received your enquiry and our team will review it shortly. Thank you for contacting SoftClinch Consulting Services.
              </p>
              <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.7;">
                Here is a copy of the details you submitted:
              </p>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                <tr>
                  <td style="padding: 0 0 12px; color: #475569; font-size: 14px; width: 120px;"><strong>Company:</strong></td>
                  <td style="padding: 0 0 12px; color: #0f172a; font-size: 14px;">${escapeHtml(input.company)}</td>
                </tr>
                <tr>
                  <td style="padding: 0 0 12px; color: #475569; font-size: 14px; width: 120px;"><strong>Phone:</strong></td>
                  <td style="padding: 0 0 12px; color: #0f172a; font-size: 14px;">${escapeHtml(input.phone)}</td>
                </tr>
                ${renderOptionalHtmlRow("Industry", input.industry)}
                ${renderOptionalHtmlRow("Service", input.service)}
                ${renderOptionalHtmlRow("Timeline", input.timeline)}
                ${renderOptionalHtmlRow("Budget", input.budget)}
              </table>
              <div style="margin: 20px 0 24px; padding: 18px 20px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px;">
                <p style="margin: 0 0 8px; color: #475569; font-size: 14px;"><strong>Your message</strong></p>
                <p style="margin: 0; color: #0f172a; font-size: 15px; line-height: 1.7;">${escapeHtml(input.message).replace(/\n/g, "<br />")}</p>
              </div>
              <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.7;">
                Our team will get back to you as soon as possible.
              </p>
              <p style="margin: 0; font-size: 16px; line-height: 1.7;">
                Regards,<br />
                SoftClinch Consulting Services
              </p>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
  const textContent = [
    `Hi ${input.name},`,
    "",
    "Thank you for contacting SoftClinch Consulting Services.",
    "We received your enquiry and our team will review it shortly.",
    "",
    "Submitted details:",
    `Company: ${input.company}`,
    `Phone: ${input.phone}`,
    renderOptionalTextRow("Industry", input.industry),
    renderOptionalTextRow("Service", input.service),
    renderOptionalTextRow("Timeline", input.timeline),
    renderOptionalTextRow("Budget", input.budget),
    "",
    "Message:",
    input.message,
    "",
    "Regards,",
    "SoftClinch Consulting Services",
  ]
    .filter((line): line is string => Boolean(line))
    .join("\n");

  return {
    subject,
    htmlContent,
    textContent,
  };
}
