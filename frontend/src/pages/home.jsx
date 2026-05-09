import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import LogoutIcon from '@mui/icons-material/Logout';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {

    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");

    const { addToUserHistory } = useContext(AuthContext);

    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

    return (
        <div className='homePageContainer'>

            {/* Background Effects */}
            <div className='homeBlurOne'></div>
            <div className='homeBlurTwo'></div>

            {/* Navbar */}
            <div className="homeNavbar">

                <div className='homeNavbarLeft'>

                    <div className='homeLogoBox'>
                        C
                    </div>

                    <h2>SyncMeet</h2>

                </div>

                <div className='homeNavbarRight'>

                    <div
                        className='homeHistoryButton'
                        onClick={() => {
                            navigate("/history")
                        }}
                    >
                        <IconButton>
                            <RestoreIcon className='homeIcon' />
                        </IconButton>

                        <p>History</p>
                    </div>

                    <Button
                        className='logoutButton'
                        onClick={() => {
                            localStorage.removeItem("token")
                            navigate("/auth")
                        }}
                    >
                        <LogoutIcon />
                        Logout
                    </Button>

                </div>

            </div>

            {/* Main Section */}
            <div className="meetContainer">

                {/* Left */}
                <div className="leftPanel">

                    <div className='meetingCard'>

                        <div className='meetingBadge'>
                            <VideoCallIcon />
                            <span>Start Secure Meeting</span>
                        </div>

                        <h2>
                            Premium video meetings for modern collaboration.
                        </h2>

                        <p>
                            Join secure HD meetings instantly with crystal-clear
                            audio, seamless connectivity, and modern collaboration tools.
                        </p>

                        <div className='meetingInputContainer'>

                            <TextField
                                onChange={e => setMeetingCode(e.target.value)}
                                id="outlined-basic"
                                label="Enter Meeting Code"
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{
                                    style: { color: "#94A3B8" }
                                }}
                                InputProps={{
                                    style: {
                                        color: "white",
                                        borderRadius: "16px",
                                        background: "rgba(255,255,255,0.04)"
                                    }
                                }}
                            />

                            <Button
                                onClick={handleJoinVideoCall}
                                variant='contained'
                                className='joinMeetingButton'
                            >
                                Join Meeting
                            </Button>

                        </div>

                    </div>

                </div>

                {/* Right */}
                <div className='rightPanel'>

                    <div className='meetingImageWrapper'>

                        <img srcSet='/logo3.png' alt="" />

                    </div>

                </div>

            </div>

        </div>
    )
}

export default withAuth(HomeComponent)