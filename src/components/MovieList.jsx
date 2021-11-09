import { DescriptionModal } from "./DescriptionModal"
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useState } from "react";
import Modal from "react-modal";

const DEFAULT_IMAGE = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_"

export const MovieList = ({movie}) => {
  const poster = movie.Poster === "N/A" ? DEFAULT_IMAGE : movie.Poster;
  const [ show, setShow ] = useState(false);

  const openModal = () => {
    setShow(true)
  };

  return (
  <Grid container justify="center">
      <Grid item xs={12}>
        <div data-aos="fade-up">
          <Card className="card">
            <Divider />

            <CardContent>
              <div className="movieZone"  id="cardContents">
                <h2>{movie.Title}</h2>
                <div>
                  <img
                    width="200"
                    alt={`TheMovieTitle: ${movie.Title}`}
                    src={poster}
                  />
                </div>
                <div className="modalZone">
                  <Button onClick={openModal}>詳細</Button>
                  <DescriptionModal show={show} setShow={setShow} content={movie.imdbID} />
                </div>
                <p>{movie.Year}</p>
              </div>
            </CardContent>

          </Card>

        </div>
      </Grid>
    </Grid>
  )
}
