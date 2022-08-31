import * as S from './Footer.styled'

export function Footer() {
  return (
    <S.Container>
      <S.List>
        <li>
          <h2>Info</h2>
          <span>Pricing</span>
          <span>Features</span>
          <span>Help Center</span>
          <span>Contact</span>
        </li>

        <li>
          <h2>Company</h2>
          <span>About Us</span>
          <span>Career</span>
          <span>Product Updates</span>
          <span>Blog</span>
        </li>

        <li>
          <h2>Resources</h2>
          <span>Employee Branding</span>
          <span>Job Interviewing</span>
          <span>GDPR Hiring</span>
          <span>The Art of Work</span>
        </li>

        <li>
          <h2>Legal</h2>
          <span>Security</span>
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </li>
      </S.List>
    </S.Container>
  )
}
