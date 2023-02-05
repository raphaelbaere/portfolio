import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexWrap: 'wrap',
};

export default function BasicModal(props) {
  const { srcImage, siteDesc, siteTech, siteTitle } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const showTechs = (techs) => {
    return techs.map((tech) => {
      return (<p>{tech}</p>)
    })
  }

  return (
    <div>
      <img alt='Project' src={ srcImage } onClick={handleOpen}></img>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            {siteTitle}
          </Typography>
          <div>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
            {siteDesc}
          </Typography>
          <div style={ { display: 'flex', gap: '10px', alignItems: 'center' } }>
          <h3>Tecnologias utilizadas:</h3>
          {showTechs(siteTech)}
          </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}