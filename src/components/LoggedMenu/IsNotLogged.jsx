import React, { useState } from 'react'
import { 
	Avatar, 
	Menu, 
	MenuItem, 
	Tooltip,
	IconButton,
	Divider,
	ListItemIcon
} from '@mui/material'
import { FiUser } from 'react-icons/fi'
import { FaGoogle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

export default function IsNotLogged() {
	const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
	const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  

	return (
		<div>
			<Tooltip title='Conta'>
				<IconButton
					onClick={handleClick}
					size="small"
					sx={{ ml: 2 }}
					aria-controls={open ? 'account-menu' : undefined}
					aria-haspopup="true"
					aria-expanded={open ? 'true' : undefined}
				>
					<Avatar sx={{ width: 32, height: 32, bgcolor: '#A2BDC7'}}>
						<FiUser />
					</Avatar>
				</IconButton>
			</Tooltip>

			<Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
						bgcolor: '#373636',
						color: '#fff',
            fontFamily: 'KoHo',
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: '#373636',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
						'& .MuiButtonBase-root:hover': {
							bgcolor: '#6d8f9c',
						},
            '& .MuiListItemIcon-root': {
              color: '#fff'
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem sx={{ fontFamily: 'KoHo', fontWeight: 'bold' }} onClick={() => { navigate('/login') }}>
					<ListItemIcon>
						<FaGoogle /> 
					</ListItemIcon>
					Faça login
        </MenuItem>
        {/* <Divider sx={{ bgcolor: '#fff' }}  />
				<p className='text-left pl-4 text-sm'>Ainda não possui conta?</p>
        <MenuItem sx={{ fontFamily: 'KoHo', textAlign: 'center', fontWeight: 'bold' }} onClick={handleClose}>
          <ListItemIcon>
            <FaGoogle className='icons' />
          </ListItemIcon>
          Crie sua conta
        </MenuItem> */}
      </Menu>
		</div>
	)
}
