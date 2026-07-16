import { NextResponse } from 'next/server'

/**
 * Next.js API Route for handling selective Audit Application submissions.
 * This is configured to notify the CEO/Company mail for FREE using:
 * 1. Formspree API (forwarding to founder inbox) - 100% Free.
 * 2. CallMeBot WhatsApp API - 100% Free unofficial API for personal alerts.
 */
export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, company, service, message } = data

    // Validate request data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields (Name, Email, Message)' },
        { status: 400 }
      )
    }

    // ──────────────────────────────────────────────────────────────────────────
    // 1. Send Email Notification (FREE via Formspree API)
    // ──────────────────────────────────────────────────────────────────────────
    
    // To set this up:
    // 1. Create a free account at https://formspree.io/
    // 2. Create a new Form and get your Form ID (e.g., "xqnqnyqy").
    // 3. Set the environment variable in your .env.local:
    //    FORMSPREE_FORM_ID="your-form-id"

    let emailSent = false
    const formspreeFormId = process.env.FORMSPREE_FORM_ID || 'mojgjkdo'

    if (formspreeFormId) {
      try {
        const formspreeRes = await fetch(`https://formspree.io/f/${formspreeFormId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            subject: `🚨 New Technical Audit Application from ${name}`,
            name,
            email,
            company: company || 'N/A',
            service: service || 'Not Selected',
            message,
          }),
        })

        if (formspreeRes.ok) {
          emailSent = true
        } else {
          console.error('Formspree returned an error response:', await formspreeRes.text())
        }
      } catch (err) {
        console.error('Formspree submission failed:', err)
      }
    } else {
      console.log('Skipping Formspree: FORMSPREE_FORM_ID environment variable not set.')
    }

    // ──────────────────────────────────────────────────────────────────────────
    // 2. Send WhatsApp Notification (FREE via CallMeBot API)
    // ──────────────────────────────────────────────────────────────────────────
    
    // To set this up for FREE:
    // 1. Add CallMeBot's phone number on WhatsApp.
    // 2. Send the message "I allow callmebot to send me messages" to get your free API key.
    // 3. Set these environment variables:
    //    WHATSAPP_PHONE="[your phone number with country code, e.g. +91XXXXXXXXXX]"
    //    WHATSAPP_API_KEY="[your-callmebot-api-key]"

    let whatsappSent = false
    const waPhone = process.env.WHATSAPP_PHONE
    const waApiKey = process.env.WHATSAPP_API_KEY

    if (waPhone && waApiKey) {
      const alertMessage = `🚨 *New Audit Application* 🚨\n\n👤 *Name:* ${name}\n🏢 *Company:* ${company || 'N/A'}\n💼 *Service:* ${service || 'N/A'}\n\n*Message:* ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}`
      
      const encodedMsg = encodeURIComponent(alertMessage)
      const callmebotUrl = `https://api.callmebot.com/whatsapp.php?phone=${waPhone}&text=${encodedMsg}&apikey=${waApiKey}`

      try {
        const waRes = await fetch(callmebotUrl)
        if (waRes.ok) {
          whatsappSent = true
        } else {
          console.error('CallMeBot returned an error response:', await waRes.text())
        }
      } catch (err) {
        console.error('CallMeBot fetch failed:', err)
      }
    } else {
      console.log('Skipping WhatsApp alert: WHATSAPP_PHONE and WHATSAPP_API_KEY environment variables not set.')
    }

    return NextResponse.json({
      success: true,
      message: 'Application processed successfully',
      notifications: {
        email: emailSent ? 'sent' : 'skipped',
        whatsapp: whatsappSent ? 'sent' : 'skipped',
      },
    })
  } catch (error) {
    console.error('Contact API Error:', error)
    return NextResponse.json(
      { error: 'An internal error occurred while processing the application.' },
      { status: 500 }
    )
  }
}
