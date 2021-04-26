import styled from "@emotion/styled";
import { Dialog,DialogTitle,RadioGroup,FormControlLabel } from "@material-ui/core";

export const Modal = styled(Dialog)`  

`

export const ModalProfileWrapper = styled(DialogTitle)`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
  height: 16rem;
`

export const ModalProfileImg = styled.img``

export const ModalNumberAndNameWrapper = styled.div`
  display:flex;
  width: 6.5rem;
  justify-content:space-between;
  align-items:center;
  padding-top:1.5rem;

`
export const ModalProfileNumber = styled.div`
  font-size:1rem;
`

export const ModalProfileName = styled.div`
  font-size:1.5rem;
  font-weight:800;
`

export const ModalHrWapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`
export const ModalHr = styled.hr`
  width:36.75rem;
  border: 1px solid  #CAD2D5;
`

export const ModalContentsWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  max-width:36.75rem;
  width:100%;
  padding-bottom: 3.75rem;
`

export const ModalContentTitleWrapper = styled.div`
  display:flex;
  flex-direction:column;
  max-width:36.75rem;
  width:100%;
  padding-top:3.75rem;
`

export const ModalContentTitle = styled.div`
  font-size:1.125rem;
  font-weight:700;
  padding-bottom:1.25rem;

`

export const ModalContentTitleTextBox = styled.input`
  max-width:36.75rem;
  width:100%;
  border-radius:1rem;
  height:4rem;
  border: 1px solid #CAD2D5;
  padding:1.25rem;
  outline:none;
  font-size:1rem;
  font-weight:700;
  ::-webkit-input-placeholder {
    color: #CAD2D5;
  }
`

export const ModalContentCategoryWrapper = styled.div`
  display:flex;
  flex-direction:column;
  max-width:36.75rem;
  width:100%;
  padding-top:2.5rem;
`

export const ModalContentCategoryTitle = styled.div`
  font-size:1.125rem;
  font-weight:700;
  `



export const ModalBlogWrapper = styled.div`
  display:flex;
  flex-direction:column;
  max-width:36.75rem;
  width:100%;
  padding-top:2.5rem;
`

export const ModalBlogTitle = styled.div`
  font-size:1.125rem;
  font-weight:700;
  padding-bottom:1.25rem;
`

export const ModalBlogSelectBtn = styled.button`
  max-width:36.75rem;
  width:100%;
  border-radius:1rem;
  height:4rem;
  border: 1px solid #CAD2D5;
  padding:1.25rem;
  outline:none;
  font-size:1rem;
  color:#CAD2D5;
  background-color:white;
  display:flex;
  justify-content:space-between;
`


export const ModalBlogSelectTitle = styled.div`
  font-size:1rem;
`

export const ModalBlogArrowDown = styled.img``

export const ModalBlogSelectWrapper = styled.div`
  height:16rem;
  border:1px solid #CAD2D5;
  border-radius:1rem;
  margin-top:1.25rem;

`

export const ModalBlogNotion = styled.button`
  height:4rem;
  max-width:36.75rem;
  width:100%;
  border-top-left-radius:1rem;
  border-top-right-radius:1rem;
  outline:none;
  background-color:transparent;
  border:none;
  border-bottom:1px solid  #CAD2D5;
  :hover{
    background-color:#F4F6F7;
  }
  :focus{
    background-color:#F4F6F7;
  }
`
export const ModalBlogVelog = styled.button`
  height:4rem;
  max-width:36.75rem;
  width:100%;
  outline:none;
  background-color:transparent;
  border:none;
  border-bottom:1px solid  #CAD2D5;
  :hover{
    background-color:#F4F6F7;
  }
  :focus{
    background-color:#F4F6F7;
  }
  `
export const ModalBlogTistory = styled.button`
  height:4rem;
  max-width:36.75rem;
  width:100%;
  outline:none;
  background-color:transparent;
  border:none;
  :hover{
    background-color:#F4F6F7;
  }

  :focus{
    background-color:#F4F6F7;
  }
  `
export const ModalBlogGitBlog = styled.button`
  height:4rem;
  max-width:36.75rem;
  width:100%;
  border-bottom-left-radius:1rem;
  border-bottom-right-radius:1rem;
  outline:none;
  background-color:transparent;
  border:none;
  border-top:1px solid  #CAD2D5;
  :hover{
    background-color:#F4F6F7;
    border-bottom:1px solid #CAD2D5;
  }
  :focus{
    background-color:#F4F6F7;
  }
  `

export const ModalLinkWrapper = styled.div`
  display:flex;
  flex-direction:column;
  max-width:36.75rem;
  width:100%;
  padding-top:2.5rem;
  padding-bottom:3.75rem;
`

export const ModalLinkTitle = styled.div`
  font-size:1.125rem;
  font-weight:700;
  padding-bottom:1.25rem;
`
export const ModalLinkTextBox = styled.input`
  max-width:36.75rem;
  width:100%;
  border-radius:1rem;
  height:4rem;
  border: 1px solid #CAD2D5;
  padding:1.25rem;
  outline:none;
  font-size:1rem;
  font-weight:700;
  ::-webkit-input-placeholder {
    color: #CAD2D5;
  }

`

export const ModalPostBtn = styled.button`
  width:36.75rem;
  /* width:100%; */
  height:4rem;
  outline:none;
  cursor: pointer;
  background-color:#0089A7;
  color:white;
  border:none;
  border-radius:1rem;
  font-size:1.25rem;
  margin-bottom:3.75rem;
`

