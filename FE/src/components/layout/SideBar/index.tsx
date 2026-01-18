import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import sideBarConfig from './sidebar.config';
import styles from './styles';

function SideBar() {
  const { pathname } = useLocation();

  const menu =
    sideBarConfig[pathname] ||
    Object.entries(sideBarConfig).find(([route]) =>
      pathname.startsWith(route)
    )?.[1];
console.log(menu)
  if (!menu) return null;

  return (
    <Box sx={styles.SidebarContainer}>
      {menu.map(el => (
        <Link
          key={el.path}
          to={el.path}
          style={{ textDecoration: 'none' }}
        >
          <Typography
            sx={{
              ...styles.MenuLink,
              ...(pathname === el.path ? styles.ActiveMenuLink : {}),
            }}
          >
            {el.label}
          </Typography>
        </Link>
      ))}
      <Box sx={styles.Spacer} />
    </Box>
  );
}

export default SideBar;
