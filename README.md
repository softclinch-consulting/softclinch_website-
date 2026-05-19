# SoftClinch Website

This is a Next.js App Router project for the SoftClinch website.

## Local development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Brevo contact flow

The contact form posts to [app/api/contact/route.ts](/C:/Users/Ashwin/Downloads/softclinch_website--main/softclinch_website--main/app/api/contact/route.ts) and does three things:

1. Creates or updates the contact in Brevo.
2. Sends a thank-you email to the user with a Brevo template.
3. Sends an admin notification email with a separate Brevo template.

The frontend form in [components/Contact.tsx](/C:/Users/Ashwin/Downloads/softclinch_website--main/softclinch_website--main/components/Contact.tsx) now submits:

- `name`
- `email`
- `phone`
- `company`
- `service`
- `message`

## Required environment variables

Set these in GitHub Secrets, Vercel Environment Variables, and Netlify Environment Variables:

```env
BREVO_API_KEY=your_brevo_api_key
BREVO_CONTACT_LIST_ID=5
BREVO_USER_TEMPLATE_ID=10
BREVO_ADMIN_TEMPLATE_ID=11
ADMIN_EMAIL=admin@yourcompany.com
```

These are also still supported for backward compatibility if you already use them:

- `BREVO_CONFIRMATION_TEMPLATE_ID`
- `BREVO_TEMPLATE_ID`
- `BREVO_ADMIN_EMAIL`

The project also expects:

- `BREVO_SENDER_EMAIL`
- `BREVO_SENDER_NAME`
- `NEXT_PUBLIC_SITE_URL`

Optional Brevo attribute mappings:

- `BREVO_COMPANY_ATTRIBUTE`
- `BREVO_PHONE_ATTRIBUTE`
- `BREVO_MESSAGE_ATTRIBUTE`
- `BREVO_SERVICE_ATTRIBUTE`
- `BREVO_INDUSTRY_ATTRIBUTE`
- `BREVO_TIMELINE_ATTRIBUTE`
- `BREVO_BUDGET_ATTRIBUTE`

## Brevo template variables

Use these params inside Brevo transactional templates:

- `{{ params.name }}`
- `{{ params.email }}`
- `{{ params.phone }}`
- `{{ params.company }}`
- `{{ params.service }}`
- `{{ params.message }}`

The user reply template reference lives in [docs/brevo-contact-reply-template.md](/C:/Users/Ashwin/Downloads/softclinch_website--main/softclinch_website--main/docs/brevo-contact-reply-template.md).

Suggested admin template content:

```text
New lead received from website.

Name:
{{params.name}}

Email:
{{params.email}}

Phone:
{{params.phone}}

Company:
{{params.company}}

Service:
{{params.service}}

Requirement:
{{params.message}}
```

## Deployment checklist

- Add the environment variables in GitHub, Vercel, and Netlify.
- Create the Brevo contact list.
- Generate the Brevo API key.
- Create and publish both Brevo transactional templates.
- Verify the sender email in Brevo.
- If Brevo blocks requests with an IP allowlist error, allow the deployment provider IPs.

## Common Brevo errors

- `401 Unauthorized`: wrong API key.
- `Template Not Found`: wrong template ID.
- `Invalid List ID`: wrong Brevo contact list ID.
- `unrecognised IP address`: add your deployment IP to Brevo allowlist.
