import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import "../App.css"
import {
    Card,
    CardContent,
    Typography,
    IconButton,
    Button,
    Box
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

import "../App.css"

export default function History() {

    const { getHistoryOfUser } = useContext(AuthContext);

    const [meetings, setMeetings] = useState([])

    const routeTo = useNavigate();

    useEffect(() => {

        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                setMeetings(history);
            } catch {

            }
        }

        fetchHistory();

    }, [])

    let formatDate = (dateString) => {

        const date = new Date(dateString);

        const day = date.getDate().toString().padStart(2, "0");

        const month = (date.getMonth() + 1)
            .toString()
            .padStart(2, "0")

        const year = date.getFullYear();

        return `${day}/${month}/${year}`
    }

    return (

        <div className='historyPage'>

            {/* Background Effects */}
            <div className='historyBlurOne'></div>
            <div className='historyBlurTwo'></div>

            {/* Header */}
            <div className='historyNavbar'>

                <div className='historyNavbarLeft'>

                    <div className='historyLogoBox'>
                        S
                    </div>

                    <div>
                        <h2>Meeting History</h2>
                        <p>Your recent SyncMeet meetings</p>
                    </div>

                </div>

                <IconButton
                    className='historyHomeButton'
                    onClick={() => {
                        routeTo("/home")
                    }}
                >
                    <HomeIcon />
                </IconButton>

            </div>

            {/* Main Content */}
            <div className='historyContainer'>

                {
                    meetings.length !== 0 ?

                        meetings.map((e, i) => {

                            return (

                                <Card
                                    key={i}
                                    className='historyCard'
                                >

                                    <CardContent>

                                        <div className='historyCardTop'>

                                            <div className='historyMeetingIcon'>
                                                <VideoCallIcon />
                                            </div>

                                            <div>

                                                <Typography
                                                    className='historyMeetingTitle'
                                                >
                                                    Meeting Room
                                                </Typography>

                                                <Typography
                                                    className='historyMeetingCode'
                                                >
                                                    Code: {e.meetingCode}
                                                </Typography>

                                            </div>

                                        </div>

                                        <div className='historyCardBottom'>

                                            <div className='historyDateBox'>

                                                <AccessTimeFilledIcon />

                                                <Typography>
                                                    {formatDate(e.date)}
                                                </Typography>

                                            </div>

                                            <Button
                                                variant='contained'
                                                className='historyJoinButton'
                                                onClick={() => {
                                                    routeTo(`/${e.meetingCode}`)
                                                }}
                                            >
                                                Rejoin
                                            </Button>

                                        </div>

                                    </CardContent>

                                </Card>

                            )

                        })

                        :

                        <div className='historyEmptyState'>

                            <div className='historyEmptyIcon'>
                                <VideoCallIcon />
                            </div>

                            <h2>No Meetings Yet</h2>

                            <p>
                                Your meeting history will appear here after joining calls.
                            </p>

                            <Button
                                variant='contained'
                                onClick={() => {
                                    routeTo("/home")
                                }}
                            >
                                Start New Meeting
                            </Button>

                        </div>
                }

            </div>

        </div>
    )
}