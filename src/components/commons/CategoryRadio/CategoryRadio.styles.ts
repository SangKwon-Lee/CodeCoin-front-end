import styled from "@emotion/styled";
import { Dialog, DialogTitle, RadioGroup, FormControlLabel } from "@material-ui/core";

export const ModalFormControlLabel = styled(FormControlLabel)`
  font-size:1rem;
  font-weight:800;
  padding-top:1.25rem;
`


export const ModalRadioGroup = styled(RadioGroup)`
  margin-top:-1rem;
  &.MuiFormGroup-root {
    display:flex;
    flex-direction:row;
  }
`