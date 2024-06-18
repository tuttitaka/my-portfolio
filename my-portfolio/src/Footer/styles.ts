import styled from "styled-components";


export const FooterContainer = styled.footer`
    margin-top: 100px;
      background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
`

export const FooterText = styled.p`
  margin: 0;
  font-size: 14px;

  a {
    margin: 0 3px;
    color: #fff;
    font-size: 20px;
  }
`;
export const ContactText = styled.span`
  font-size: 18px; 
  margin-left: 10px;
`;


export const FooterLink = styled.a`
  color: #0070f3;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const SocialIcons = styled.div`
margin: 10px 0;



a {
  margin: 0 10px;
  color: #fff;
  font-size: 20px;

  &:hover {
    color: #0070f3;
  }
}
`