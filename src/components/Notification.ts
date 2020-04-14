import { notification } from "antd";
interface INotify {
  type: "success" | "info" | "warning" | "error";
  message: any;
  title: any;
}
const notify = (notify: INotify) => {
  notification[notify.type]({
    message: notify.title,
    description: notify.message,
  });
};

export default notify;
