import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import ChatIcon from '@material-ui/icons/Chat';
import  MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, Icon, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons"

function Sidebar() {
    return (
        <div className="sidebar">
            <Avatar/>
            <div className="sidebar__header">
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                       <MoreVertIcon/> 
                    </IconButton>
                    
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
