import * as React from 'react';

//LIBS
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import {
    IconButton,
    CardActions,
    CardContent,
    CardMedia,
    CardHeader,
    Card,
} from '@mui/material';
import {baseImage} from "../../utils/utils";
import moment from "moment";

//Components
import ModalComponent from "../../components/modal/ModalComponent";
import NoImage from "../../img/not-image.jpeg";

// Reducer
import { MovieResultsType } from "../../reducers/movie/MoviesType";

type CardProps = {
    movie: MovieResultsType
};

const ExpandMore = styled((props: any) => {
    const { expand, ...other } = props;
      return <IconButton {...other} />;
    })(({ theme, expand }) => ({
      transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
  }));

function CardComponent({movie}: CardProps){

    const [isOpenModal, setIsOpenModal] = React.useState(false);

    const closeModal = () => {
        setIsOpenModal(false);
    }
    const openModal = () => {
        setIsOpenModal(true);
    }
    return (
        <div className="card-movie">
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    title={movie.title}
                    subheader={moment(movie.release_date).format('ll')}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={movie.backdrop_path ? baseImage + movie.backdrop_path : NoImage }
                    alt={movie.title}
                />
                <CardContent className="description-container">
                    {
                        movie.overview
                    }
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton aria-label="sSee More" onClick={openModal}>
                        <ZoomInIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <ModalComponent open={isOpenModal} title={movie.title} description={movie.overview} closeModal={closeModal} />
        </div>
    )
}

export default CardComponent;