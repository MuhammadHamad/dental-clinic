import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const { data: emailResponse } = await resend.emails.send({
      from: "Dental Clinic <onboarding@resend.dev>",
      to: "Khuzaifa957@gmail.com",
      subject: "New Appointment Request",
      text: `
        New Appointment Request:
        
        Full Name: ${data.fullName}
        Phone Number: ${data.phoneNumber}
        Email: ${data.email}
        Preferred Date: ${data.preferredDate}
        Description: ${data.description}
      `,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Full Name:</strong> ${data.fullName}</p>
        <p><strong>Phone Number:</strong> ${data.phoneNumber}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Preferred Date:</strong> ${data.preferredDate}</p>
        <p><strong>Description:</strong> ${data.description}</p>
      `,
    })

    return Response.json({ success: true, id: emailResponse?.id })
  } catch (error) {
    console.error("Error submitting appointment:", error)
    return Response.json({ error: "Failed to submit appointment" }, { status: 500 })
  }
}

