import moment from "moment";
import DateTime from "./DateTime";
import { IPropsVideo } from "./Video";

function withPrettyDateTime(Component: React.ComponentType<IPropsVideo>) {
  return function (props: IPropsVideo) {
    const formattedDate = (date: string) => {
      const now = moment();
      const publishedAt = moment(date);
      const diffHours = now.diff(publishedAt, "hours");

      if (diffHours < 1) {
        return `${now.diff(publishedAt, "minutes")} минут назад`;
      } else if (diffHours < 24) {
        return `${diffHours} часов назад`;
      } else {
        return `${now.diff(publishedAt, "days")} дней назад`;
      }
    };

    return <Component {...props} date={formattedDate(props.date)} />;
  };
}

const DateTimePretty = withPrettyDateTime(DateTime);

export { DateTimePretty };
