import React, { useContext } from 'react'
import {Box,IconButton,useTheme} from '@mui/material'
import InputBase from '@mui/material'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationOutlinedIcon from '@mui/icons-material/NotificationOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { ColorModeContext, tokens } from './../../theme';

const Topbar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)
  return (
    <Box display='flex' justifyContent={'space-between'} p={2}>
      <IconButton></IconButton>
    </Box>
  )
}

export default Topbar