import { type NextRequest, NextResponse } from "next/server"

interface SignupRequest {
  name: string
  email: string
  password: string
  fitnessGoal: string
}

export async function POST(request: NextRequest) {
  try {
    const body: SignupRequest = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.password) {
      return NextResponse.json({ error: "Name, email, and password are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Validate password strength
    if (body.password.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters" }, { status: 400 })
    }

    // TODO: In production, you would:
    // 1. Hash the password using bcrypt
    // 2. Store user in database
    // 3. Send verification email
    // 4. Create session/token

    // Simulated successful account creation
    return NextResponse.json(
      {
        success: true,
        message: "Account created successfully! Please check your email to verify.",
        user: {
          name: body.name,
          email: body.email,
          fitnessGoal: body.fitnessGoal || "General Fitness",
        },
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json({ error: "An error occurred during signup" }, { status: 500 })
  }
}
