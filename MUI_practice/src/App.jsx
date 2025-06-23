import ButtonGroup from "@mui/material/ButtonGroup";
import "./App.css";
import Button from "@mui/material/Button"; // ✅ Import the Button from Material UI
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function App() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const labels = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br /> <br />
      <div>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
      <br />
      <br />
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        <FormControlLabel required control={<Checkbox />} label="Required" />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      </FormGroup>
      <div>
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} defaultChecked color="secondary" />
        <Checkbox {...label} defaultChecked color="success" />
        <Checkbox {...label} defaultChecked color="default" />
        <Checkbox
          {...label}
          defaultChecked
          sx={{
            color: pink[800],
            "&.Mui-checked": {
              color: pink[600],
            },
          }}
        />
      </div>
      <Checkbox
        {...labels}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
      />
      <Checkbox
        {...labels}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
      <Fab size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab size="medium" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    </>
  );
}

export default App;
