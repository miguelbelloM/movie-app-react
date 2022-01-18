import {
    Box,
    Grid
} from '@mui/material';

function FooterContainer(){
    return(
        <footer className="footer">
            <Box sx={{ flexGrow: 1 }} className='footer-information'>
                <Grid container spacing={3}>
                    <Grid item xs={4} className='icon'>
                        <strong>GitHub: </strong>
                        <a href="https://github.com/miguelbelloM">miguelbelloM</a>
                    </Grid>
                    <Grid item xs={4}>
                        <strong>Email: </strong>
                        <a href="mailto:miguelbellomunevar@gmail.com">miguelbellomunevar@gmail.com</a>
                    </Grid>
                    <Grid item xs={4}>
                        <strong>Linkedin: </strong>
                        <a href="https://www.linkedin.com/in/miguel-bello-munevar/" target="_blank" rel="noopener noreferrer">Miguel Bello Munevar</a>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }} >
                <Grid item xs={12}>
                    <hr />
                </Grid>
                <Grid item xs={12} className='date'>
                    <strong>Redux, Typescript, React, Jest</strong>
                </Grid>
            </Box>
        </footer>
    )
}

export default FooterContainer;