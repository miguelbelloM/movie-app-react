//LIBS
import {
    Box,
    Grid
} from '@mui/material';

//LABELS
import EN_LABEL from "../../string/en";

function FooterContainer(){
    return(
        <footer className="footer">
            <Box sx={{ flexGrow: 1 }} className='footer-information'>
                <Grid container spacing={3}>
                    <Grid item xs={4} className='icon'>
                        <strong>{EN_LABEL.footer.gitHubTitle}</strong>
                        <a target="_blank" href={`https://github.com/${EN_LABEL.footer.gitHubUser}`}>{EN_LABEL.footer.gitHubUser}</a>
                    </Grid>
                    <Grid item xs={4}>
                        <strong>{EN_LABEL.footer.emailTitle}</strong>
                        <a target="_blank" href={`mailto:${EN_LABEL.footer.emailAddress}`}>{EN_LABEL.footer.emailAddress}</a>
                    </Grid>
                    <Grid item xs={4}>
                        <strong>{EN_LABEL.footer.linkedinTitle}</strong>
                        <a href={EN_LABEL.footer.linkedinLink} target="_blank" rel="noopener noreferrer">
                            {EN_LABEL.footer.linkedinUser}
                        </a>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }} >
                <Grid item xs={12}>
                    <hr />
                </Grid>
                <Grid item xs={12} className='date'>
                    <strong>{EN_LABEL.footer.Teclogies}</strong>
                </Grid>
            </Box>
        </footer>
    )
}

export default FooterContainer;