interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({
  username,
  otp,
}: VerificationEmailProps) {
  return (
    <div>
      <h1>Hello {username}</h1>
      <p>Your verification code is:</p>
      <h2>{otp}</h2>
    </div>
  );
}
