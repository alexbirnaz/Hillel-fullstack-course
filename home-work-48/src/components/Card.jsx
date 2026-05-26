import { Card as MuiCard, CardContent, Typography } from "@mui/material";

function Card({ title, text }) {
  return (
    <MuiCard sx={{ margin: 2 }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography color="text.secondary">{text}</Typography>
      </CardContent>
    </MuiCard>
  );
}

export default Card;
