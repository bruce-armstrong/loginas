import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import MicrosoftIcon from 'mdi-react/MicrosoftIcon';
import GoogleIcon from 'mdi-react/GoogleIcon'
import EmoticonCoolIcon from 'mdi-react/EmoticonCoolIcon';
import RunFastIcon from 'mdi-react/RunFastIcon';

export default function useSocialLogin() {

    let icon = [
        { id: "Facebook", icon: <FacebookIcon /> },
        { id: "Microsoft", icon: <MicrosoftIcon /> },
        { id: "Google" , icon: <GoogleIcon /> },
        { id: "Keycloak", icon: <EmoticonCoolIcon/>},
        { id: "PowerServer", icon: <RunFastIcon/>}
    ];

    //   const [socialMediaValue, setSocialMediaValue] = useState();

    const handleLoginClick = (id) => {
        switch (id) {
            case "FacebookIcon":
                return console.log(id);
            case "Instagram":
                return console.log(id);
            case "TwitterIcon":
                return console.log(id);
            case "MailIcon":
                return console.log(id);
            case "GitHubIcon":
                return console.log(id);
            case "LinkedInIcon":
                return console.log(id);
            case "EmotionCoolIcon":
                return console.log(id);
            case "RunFastIcon":
                return console.log(id);
            default:
                return console.log(id);
        }
    };
    return { icon, handleLoginClick };
}
