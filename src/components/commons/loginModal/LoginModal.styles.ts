  import styled from "@emotion/styled";
  import { Dialog } from "@material-ui/core";


  export const Login = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    background-image:url("/img/loginBackground.png") ;
    background-repeat:no-repeat;
    background-size:cover;
    display:flex;
    align-items:center;
    justify-content:center;

  `

  export const LoginOpacity = styled.div`
    display:flex;
    width:100%;
    height:100%;
    background-color:white;
    opacity:0.8;
  `
  export const LoginWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:24rem;
    height:34.625rem;
    position:absolute;
    color:black;
    background-color:transparent;
    z-index:2;
  `

  export const LoginTitle = styled.div`
    font-size:1.875rem;
    font-weight:700;
    margin-bottom:1.25rem;
  `

  export const LoginGoogle = styled.button`
    font-size:1rem;
    font-weight:700;
    background-color:transparent;
    cursor: pointer;
    outline:none;
    border:1px solid black;
    width:100%;
    height:4rem;
    border-radius:1rem;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:1.25rem;
  `

export const LoginGoogleWrapper = styled.div`
  width: 10.25rem;
  display:flex;
  justify-content:space-between;
  align-items:center;
`

export const LoginGoogleTitle = styled.div`
    font-size:1rem;
    font-weight:700;

`
  export const LoginGoogleIcon = styled.img`
    
  `

  export const LoginHr = styled.hr`
    width:100%;
    border:1px solid #C4C4C4;
    margin-bottom:1.25rem;
  `

  export const LoginId = styled.input`
    width:100%;
    background-color:transparent;
    outline:none;
    border-radius:1rem;
    border:1px solid black;
    height:4rem;
    font-weight:700;
    font-size:1rem;
    padding:1.25rem;
    margin-bottom:1.25rem;
    ::placeholder {
      font-size:1rem;
      font-weight:400;
      color:black;
    }
  `

  export const LoginPw = styled.input`
    width:100%;
    background-color:transparent;
    outline:none;
    border-radius:1rem;
    border:1px solid black;
    height:4rem;
    font-weight:700;
    font-size:1rem;
    padding:1.25rem;
    margin-bottom:2.5rem;
      ::placeholder {
      font-size:1rem;
      font-weight:400;
      color:black;
    }
    `
    

  export const LoginBtn = styled.button`
    background-color:#0089A7;
    border-radius:1rem;
    font-size:1rem;
    font-weight:700;
    color:white;
    width:100%;
    outline:none;
    border:none;
    height:4rem;
    margin-bottom:1.25rem;
  `


  export const LoginCheckWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    width: 9.1rem;
    align-self:flex-start;
    background-color:transparent;
    cursor:pointer;
    align-items:center;

  `
  export const LoginCheckImg = styled.img`
    padding-right:1rem;
    padding-bottom:0.2rem;
    `

  export const LoginCheck = styled.button`
    background-color:transparent;
    cursor:pointer;
    border:none;
    font-size:1rem;
    font-weight:400;
    outline:none;
    margin-bottom:1.25rem;
  `

  export const LoginBottomWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    width:17.688rem;
    align-items:center;

  `

  export const FindEmail = styled.button`
    background-color:transparent;
    border:none;
    outline:none;
    font-size:0.875rem;
    color:#333333;
    cursor: pointer;

  `

  export const FindPw = styled.button`
    background-color:transparent;
    border:none;
    outline:none;
    font-size:0.875rem;
    color:#333333;
    cursor: pointer;
    `

  export const SignUpBtn = styled.button`
    background-color:transparent;
    border:none;
    outline:none;
    font-size:0.875rem;
    color:#333333;
    cursor: pointer;  
    `

  export const HorizonLine = styled.div`
    border-left:1px solid #CAD2D5;
    height:60%
  `


