import React from "react"
import CartWidget from "./CartWidget"

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Grid, GridItem, 
} from '@chakra-ui/react'


const NavBar = ( ) => {
    return (
        <div>
            
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                <GridItem w='100%' h='10' >
                    <h3>Autoparque-Comahue</h3>
               
                </GridItem>   

                <GridItem w='100%' h='10' >
                </GridItem>   
                <GridItem w='100%' h='10' >

                    <Menu>
                        <MenuButton>
                            Categories
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem> 
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                    </Menu>
                </GridItem>   
                <GridItem w='100%' h='10' >
                </GridItem>   
                <GridItem w='100%' h='10'  >
                    <CartWidget/>
                </GridItem>  
                
            </Grid>

            

        </div>
    )
}

export default NavBar