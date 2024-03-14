import Video, { IPropsVideo } from "./Video";

interface IPropsList {
    list: IPropsVideo[];
}


const VideoList = (props: IPropsList) => {
    return props.list.map(item => <Video url={item.url} date={item.date} key={item.url}/>);
}

export default VideoList;
