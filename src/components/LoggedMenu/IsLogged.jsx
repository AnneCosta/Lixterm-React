import React, { useState } from 'react'
import { 
	Avatar, 
	Menu, 
	MenuItem, 
	Tooltip,
	IconButton,
	Divider,
	ListItemIcon,
  ListItemText,
  ListItem,
  List
} from '@mui/material'
import { FiLogOut } from 'react-icons/fi'
import { auth } from '../../services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'

export default function IsLogged() {
	const [anchorEl, setAnchorEl] = useState(null);
  const [user] = useAuthState(auth);
  const navigate = useNavigate()
	const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const Logout = async () => {
    await auth.signOut()
    navigate('/')
  }

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
						<img width={32} height={32} src={user.photoURL}></img>
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
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <List>
          <ListItem>
            <ListItemText><strong>{user.displayName}</strong></ListItemText>
          </ListItem>
        </List>
        {/* <MenuItem>
					Tabela de Comandos
        </MenuItem> */}
        <Divider />
        <MenuItem onClick={Logout}>
          <ListItemIcon>
            <FiLogOut style={{ color: '#fff' }}/>
          </ListItemIcon>
          Sair
        </MenuItem>
      </Menu>
		</div>
	)
}
