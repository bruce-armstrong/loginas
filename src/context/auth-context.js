import React from 'react'

const authContext = React.createContext({
    authenticated: false,
    loginAs: () => {},
    userDetails: {}
})

export default authContext;