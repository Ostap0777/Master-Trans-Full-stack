import { SxProps, Theme } from '@mui/material';

const styles: Record<string, SxProps<Theme>> = {
  SidebarContainer: {
    width: 250,
    height: '100vh',
    bgcolor: 'primary.dark', // MUI theme color
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: 0,
    left: 0,
    p: 2, // padding
    boxShadow: 3,
    zIndex: 100,
  },
  MenuLink: {
    color: 'white',
    textDecoration: 'none',
    mb: 1,
    p: 1,
    borderRadius: 1,
    transition: 'background-color 0.2s',
    '&:hover': {
      bgcolor: 'primary.main',
    },
  },
  ActiveMenuLink: {
    bgcolor: 'primary.main',
  },
  Spacer: {
    flexGrow: 1, // щоб можна було додавати футер всередині SideBar
  },
};

export default styles;
