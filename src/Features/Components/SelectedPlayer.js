import React from 'react'
import {
    Box,
    List,
    ListItem,
    ListItemText,
    IconButton,
    ListItemAvatar,
    Avatar
  } from "@mui/material";
  import ListSubheader from '@mui/material/ListSubheader';
  import FolderIcon from "@mui/icons-material/Folder";
  import {  useDispatch,useSelector } from 'react-redux';
  import DeleteIcon from "@mui/icons-material/Delete";
  import { setPlayerList } from '../../redux/actions/actions';
function SelectedPlayer({title='',play}) {
    const val = useSelector((state) => state);
    const dispatch =useDispatch();
    const delfunction=(key)=>{
        let tem =val.all.SelectedPlayer.filter(name=>name.id !== key)
        dispatch(setPlayerList(tem));
    }
  return (
    <>
    <Box >
      <List
      subheader={
        <ListSubheader  sx={{ width: "200px",textAlign: 'center' ,height:'40px' , bgcolor: "transparent" }}>
         <h3>{title}</h3> 
        </ListSubheader>
      } 
      className="label-85" sx={{ width: "auto", height: "auto",  bgcolor: "transparent",paddingLeft:'10px' }}>
        {play.map((element)=>(
            <ListItem sx={{  height: "50px", bgcolor: "transparent" }} 
            key={element.id}
            onClick={()=>{delfunction(element.id)}}
            divider
            secondaryAction={
              <IconButton edge="end" aria-label="delete"  >
                <DeleteIcon />
              </IconButton>
            }
            
          >
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
            primary={element.name}
              secondary={element.pos}
            />
          </ListItem>
        ))}
       
          
        </List>
      </Box>
    </>
  )
}

export default SelectedPlayer