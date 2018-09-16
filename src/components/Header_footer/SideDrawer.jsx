import React from 'react'

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
const SideDrawer = (props) => {
    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=>props.onClose(false)}
        >

            <List component="nav">
                <ListItem button onClick={() => console.log('staert')}>
                    Event Starts in
                </ListItem>
                <ListItem button onClick={() => console.log('staert')}>
                    VENUE NFO
                </ListItem>
                <ListItem button onClick={() => console.log('staert')}>
                    Highlights
                </ListItem>
                <ListItem button onClick={() => console.log('staert')}>
                    Pricing
                </ListItem>
                <ListItem button onClick={() => console.log('staert')}>
                    Location
                </ListItem>
            </List>
        </Drawer>
    )
}
export default SideDrawer