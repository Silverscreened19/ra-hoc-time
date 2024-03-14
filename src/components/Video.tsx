import { DateTimePretty } from "./DateTimePretty";

interface IPropsVideo {
  date: string;
  url?: string;
}

const Video = (props: IPropsVideo) => {
  return (
    <div className="video">
      <iframe
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <DateTimePretty date={props.date} />
    </div>
  );
};

export type { IPropsVideo };
export default Video;
