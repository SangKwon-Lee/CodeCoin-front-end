import styled from "@emotion/styled";


import { createStyles, makeStyles, Theme, Select } from "@material-ui/core";


export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(3),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(10),
    },
  }),
);

export const MUISelect = styled(Select)`
  text-align:center;
  width: 12rem;
  height: 4.25rem;
`




