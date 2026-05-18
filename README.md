This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### Required Vercel environment variables

For the contact form to send a reply email via Brevo, set these variables in your Vercel project settings:

- `BREVO_API_KEY`
- `BREVO_CONTACT_LIST_ID` (or alias `BREVO_LIST_ID`)
- `BREVO_CONFIRMATION_TEMPLATE_ID` (or alias `BREVO_TEMPLATE_ID`)
- `BREVO_SENDER_EMAIL`
- `BREVO_SENDER_NAME`
- `BREVO_CC_EMAIL` (optional, defaults to `info@softclinch.com`)
- `NEXT_PUBLIC_SITE_URL`

Verify the following in your Brevo dashboard:

- The API key is active and has access to transactional email.
- The contact list ID is correct and exists.
- The template ID is correct and published.
- The sender email is verified in Brevo.
- The contact attributes exist in Brevo if you want to store company and message fields:
  `COMPANY`, `SMS`, and `MESSAGE` by default, or set `BREVO_COMPANY_ATTRIBUTE`,
  `BREVO_PHONE_ATTRIBUTE`, and `BREVO_MESSAGE_ATTRIBUTE` to match your Brevo setup.
- The template uses these variables: `{{ params.name }}`, `{{ params.company }}`, `{{ params.message }}`, and `{{ params.phone }}`.

Once these are configured, redeploy the `main` branch and the contact form will send a confirmation email to the user.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
