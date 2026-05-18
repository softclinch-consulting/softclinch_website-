# Brevo Contact Reply Template

Use this template in Brevo Transactional Templates for the contact form auto-reply.

## Subject

```text
Thank you for contacting SoftClinch Consulting Services
```

## Required template variables

```text
{{ params.name }}
{{ params.company }}
{{ params.phone }}
{{ params.message }}
{{ params.industry }}
{{ params.service }}
{{ params.timeline }}
{{ params.budget }}
```

## HTML content

```html
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
          <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.7;">Hi {{ params.name }},</p>
          <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.7;">
            We received your enquiry and our team will review it shortly. Thank you for contacting SoftClinch Consulting Services.
          </p>
          <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.7;">
            Here is a copy of the details you submitted:
          </p>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
            <tr>
              <td style="padding: 0 0 12px; color: #475569; font-size: 14px; width: 120px;"><strong>Company:</strong></td>
              <td style="padding: 0 0 12px; color: #0f172a; font-size: 14px;">{{ params.company }}</td>
            </tr>
            <tr>
              <td style="padding: 0 0 12px; color: #475569; font-size: 14px; width: 120px;"><strong>Phone:</strong></td>
              <td style="padding: 0 0 12px; color: #0f172a; font-size: 14px;">{{ params.phone }}</td>
            </tr>
            {{#if params.industry}}
            <tr>
              <td style="padding: 0 0 12px; color: #475569; font-size: 14px; width: 120px;"><strong>Industry:</strong></td>
              <td style="padding: 0 0 12px; color: #0f172a; font-size: 14px;">{{ params.industry }}</td>
            </tr>
            {{/if}}
            {{#if params.service}}
            <tr>
              <td style="padding: 0 0 12px; color: #475569; font-size: 14px; width: 120px;"><strong>Service:</strong></td>
              <td style="padding: 0 0 12px; color: #0f172a; font-size: 14px;">{{ params.service }}</td>
            </tr>
            {{/if}}
            {{#if params.timeline}}
            <tr>
              <td style="padding: 0 0 12px; color: #475569; font-size: 14px; width: 120px;"><strong>Timeline:</strong></td>
              <td style="padding: 0 0 12px; color: #0f172a; font-size: 14px;">{{ params.timeline }}</td>
            </tr>
            {{/if}}
            {{#if params.budget}}
            <tr>
              <td style="padding: 0 0 12px; color: #475569; font-size: 14px; width: 120px;"><strong>Budget:</strong></td>
              <td style="padding: 0 0 12px; color: #0f172a; font-size: 14px;">{{ params.budget }}</td>
            </tr>
            {{/if}}
          </table>
          <div style="margin: 20px 0 24px; padding: 18px 20px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px;">
            <p style="margin: 0 0 8px; color: #475569; font-size: 14px;"><strong>Your message</strong></p>
            <p style="margin: 0; color: #0f172a; font-size: 15px; line-height: 1.7;">{{ params.message }}</p>
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
```

## Text content

```text
Hi {{ params.name }},

Thank you for contacting SoftClinch Consulting Services.
We received your enquiry and our team will review it shortly.

Submitted details:
Company: {{ params.company }}
Phone: {{ params.phone }}
Industry: {{ params.industry }}
Service: {{ params.service }}
Timeline: {{ params.timeline }}
Budget: {{ params.budget }}

Message:
{{ params.message }}

Regards,
SoftClinch Consulting Services
```
