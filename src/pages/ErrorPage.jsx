import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '50vh',
                textAlign: 'center',
            }}>
                <h2>Something went wrong in the application.</h2>
                <Button component={Link} to="/" variant="contained">
                    Go Home
                </Button>
            </div>
        </>
    )
}

export default ErrorPage