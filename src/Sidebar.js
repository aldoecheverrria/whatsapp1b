import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import Sidebarchat from './Sidebarchat';



function Sidebar() {
    return (
        <div className="sidebar" >
            <div className="sidebar__header" >
                <Avatar />
                <div className="sidebar__headerRight" >
                    <IconButton>
                     <DonutLargeIcon />   
                    </IconButton>
                    <IconButton>
                      <ChatIcon />  
                    </IconButton>
                    <IconButton>
                     <MoreVertIcon />   
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search" >
                <div className="sidebar__searchContainer" >
                        <SearchOutlined />
                        <input placeholder="Buscar o iniciar chat" type="text"/>
                </div>
            </div>
            <div className="sidebar__chat" >
                <Sidebarchat />
            </div>
        </div>
    )
}

export default Sidebar
