  import styled from "@emotion/styled";



export const SignUpModal = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:29rem;
    /* height:38.063rem; */
    position:absolute;
    color:black;
    background-color:white;
    z-index:2;
    border-radius:1rem;
    box-shadow: 0rem 0rem 1rem 0rem rgba(0,0,0,0.2);
    padding: 3.75rem 0;
  ` 


export const SignUpModalWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;

`

export const SignUpTitle = styled.div`
  font-size:1.5rem;
  font-weight:700;
  padding-bottom:2.5rem;
`

export const SignUpContentsWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-content:center;
  justify-content:space-between;
  height:14.5rem;

`

export const SignUpNameBox = styled.input`
  width:24rem;
  border:1px solid black;
  border-radius:1rem;
  height: 4rem;
  display:flex;
  align-items:center;
  padding:1.25rem;
  font-size:1rem;
  font-weight:700;
  margin-bottom:1.25rem;
  outline: none;
`

export const SignUpNumberBox = styled.button`
  width:24rem;
  border:1px solid black;
  border-radius:1rem;
  height: 4rem;
  display:flex;
  align-items:center;
  padding:1.25rem;
  font-size:1rem;
  font-weight:400;
  justify-content:space-between;
  background-color:white;
  color: #CAD2D5;
  outline:none;
  cursor: pointer;
  margin-bottom:1.25rem;
`

export const SignUpPositionBox = styled.button`
  width:24rem;
  border:1px solid black;
  border-radius:1rem;
  height: 4rem;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:1.25rem;
  font-size:1rem;
  font-weight:400;
  background-color:white;
  color: #CAD2D5;
  outline:none;
  cursor: pointer;
`

export const SignUpArrowDown = styled.img`
`
export const SignUpCheckWrapper = styled.button`
  display:flex;
  width:14rem;
  justify-content:space-between;
  align-self:flex-start;
  padding:1.25rem 0;
  cursor: pointer;
  background-color:transparent;
  border:none;
  outline:none;
`

export const SignUpCheckImg = styled.img``

export const SignUpCehckText = styled.div`
  font-size:1rem;
`

export const SignUpHr = styled.hr`
  width:100%;
  border:none;
  border-top:1px solid black;
  padding-bottom:2.5rem;
`

export const SignUpCreateBtn = styled.button`
  width:24rem;
  height:4rem;
  background-color: #0089A7;
  border-radius:1rem;
  color:white;
  font-size:1rem;
  font-weight:700;
  border:none;
  outline:none;
  cursor: pointer;
`

export const SignUpNumberSelectWrapper = styled.div`
  max-width:36.75rem;
  width:100%;
  border:1px solid black;
  border-radius:1rem;
  margin-bottom:1.25rem;
`

export const SignUpNumber1 = styled.button`
  height:4rem;
  max-width:36.75rem;
  width:100%;
  border-top-left-radius:1rem;
  border-top-right-radius:1rem;
  outline:none;
    font-weight:700;
background-color:${(props: SignupProps) => (props.isActive ? '#F4F6F7;' : 'transparent')};
  border:none;
  :hover{
    background-color:#F4F6F7;
  }
 

`

export const SignUpNumber2 = styled.button`
  height:4rem;
  max-width:36.75rem;
  width:100%;
  border-bottom-left-radius:1rem;
  border-bottom-right-radius:1rem;
  outline:none;
  font-weight:700;
  border:none;
  background-color:${(props: SignupProps) => (props.isActive ? '#F4F6F7;' : 'transparent')};
  border-top:1px solid  #CAD2D5;
  :hover{
    background-color:#F4F6F7;
  }

  `

  export const SignUpPositionSelectWrapper = styled.div`
  max-width:36.75rem;
  width:100%;
  border:1px solid black;
  border-radius:1rem;
  margin-top:1.25rem;
  margin-bottom:1.25rem;
`

interface SignupProps {
  isActive: boolean;
}

export const SignUpMentor = styled.button`
  height:4rem;
  max-width:36.75rem;
  width:100%;
  font-weight:700;
  border-top-left-radius:1rem;
  border-top-right-radius:1rem;
  outline:none;
  background-color:${(props: SignupProps) => (props.isActive ? '#F4F6F7;' : 'transparent')};
  border:none;
  :hover{
    background-color:#F4F6F7;
  }


`

export const SignUpMentee = styled.button`
  height:4rem;
  max-width:36.75rem;
  width:100%;
  font-weight:700;
  border-bottom-left-radius:1rem;
  border-bottom-right-radius:1rem;
  outline:none;
    background-color:${(props: SignupProps) => (props.isActive ? '#F4F6F7;' : 'transparent')};
  border:none;
  border-top:1px solid  #CAD2D5;
  :hover{
    background-color:#F4F6F7;
  }

  `