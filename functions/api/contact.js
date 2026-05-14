/**
 * Cloudflare Pages Function — handles contact form submissions
 * POST /api/contact
 *
 * Required environment variable (set in Cloudflare Pages dashboard):
 *   RESEND_API_KEY  — your API key from resend.com
 *
 * The "from" address must belong to a domain you have verified in Resend.
 * Steps: resend.com → Domains → Add Domain → inscio.com → add the DNS records shown.
 */

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const formData = await request.formData();

    const firstName = (formData.get('first-name') || '').trim();
    const lastName  = (formData.get('last-name')  || '').trim();
    const email     = (formData.get('email')       || '').trim();
    const company   = (formData.get('company')     || '').trim();
    const message   = (formData.get('message')     || '').trim();

    // Basic validation
    if (!firstName || !email || !message) {
      return redirectBack(request, 'error');
    }

    if (!env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return redirectBack(request, 'error');
    }

    const displayName = [firstName, lastName].filter(Boolean).join(' ');
    const subjectLine = company
      ? `New enquiry from ${displayName} (${company})`
      : `New enquiry from ${displayName}`;

    const htmlBody = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1f36">
        <h2 style="margin-bottom:24px">New Contact Form Submission</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr>
            <td style="padding:8px 0;font-weight:600;width:120px;vertical-align:top">Name</td>
            <td style="padding:8px 0">${escHtml(displayName)}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;font-weight:600;vertical-align:top">Email</td>
            <td style="padding:8px 0"><a href="mailto:${escHtml(email)}">${escHtml(email)}</a></td>
          </tr>
          ${company ? `
          <tr>
            <td style="padding:8px 0;font-weight:600;vertical-align:top">Company</td>
            <td style="padding:8px 0">${escHtml(company)}</td>
          </tr>` : ''}
          <tr>
            <td style="padding:8px 0;font-weight:600;vertical-align:top">Message</td>
            <td style="padding:8px 0;white-space:pre-wrap">${escHtml(message)}</td>
          </tr>
        </table>
        <hr style="margin:24px 0;border:none;border-top:1px solid #e5e7eb" />
        <p style="font-size:12px;color:#6b7280">Sent via inscio.com contact form</p>
      </div>
    `;

    const resendPayload = {
      from: 'Inscio Website <no-reply@mail.inscio.com>',
      to:   ['info@inscio.com'],
      reply_to: email,
      subject: subjectLine,
      html: htmlBody,
    };

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type':  'application/json',
      },
      body: JSON.stringify(resendPayload),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error('Resend API error:', resendResponse.status, errorText);
      return redirectBack(request, 'error');
    }

    return redirectBack(request, 'sent');

  } catch (err) {
    console.error('Contact form exception:', err);
    return redirectBack(request, 'error');
  }
}

// ── helpers ───────────────────────────────────────────────────────────────────

function redirectBack(request, state) {
  const origin = new URL(request.url).origin;
  return Response.redirect(`${origin}/contact?${state}=1`, 303);
}

function escHtml(str) {
  return String(str)
    .replace(/&/g,  '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;')
    .replace(/'/g,  '&#039;');
}
