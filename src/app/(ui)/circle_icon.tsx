import { Avatar } from "@mui/material";

export default function CircleIcon({url,size =54}:{url:string, size?:number }){
    return <Avatar alt="Remy Sharp" src={url} sx={{height:size,width:size}} />
}