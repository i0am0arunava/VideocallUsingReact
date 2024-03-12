/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { v4 } from "uuid";

function Room() {
    const { roomid } = useParams<{ roomid?: string }>();
    const meetingUIRef = useRef<HTMLDivElement>(null);

    async function meetingUI(element: any) {
        const appId = 1302972560;
        const serverSecret = "b6e3168959386438cf912ef0512baefb";

        if (!roomid) {
            console.error("Room ID is undefined");
            return;
        }

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appId,
            serverSecret,
            roomid,
            v4(),
            "Arun"
        );

        const ui = ZegoUIKitPrebuilt.create(kitToken);

        ui.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },
        });
    }

    useEffect(() => {
        if (meetingUIRef.current) {
            meetingUI(meetingUIRef.current);
        }
    }, [roomid]);

    return (
        <>
            <div ref={meetingUIRef}></div>
        </>
    );
}

export default Room;
