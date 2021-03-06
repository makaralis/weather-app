import { styled } from "@mui/system";
import { Grid } from '@mui/material';

export const AutocompleteWrapper = styled('div')(({theme}) => `
    margin-top: 20px;
    margin-bottom: 20px;
`,)


export const  StyledGrid = styled(Grid)(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        marginTop: '0px',
    },
    [theme.breakpoints.down('sm')]: {
        marginBottom: '100px',
    },
    maxWidth: '100%',
    flexGrow: 1, 
    marginLeft: '10px !important',
    }
))

export const Container = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}))

