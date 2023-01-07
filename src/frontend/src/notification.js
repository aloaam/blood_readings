import {notification} from "antd";

const openNotification = (type, msg, description) => {
    notification[type]({
        message: msg,
        description: description
    })
};

export const successNotification = (msg, description) => {
    openNotification('success', msg, description)
}

export   const errorNotification = (msg, description) => {
    openNotification('error', msg, description)
}

export const infoNotification = (msg, description) => {
    openNotification('info', msg, description)
}

export const warningNotification = (msg, description) => {
    openNotification('warning', msg, description)
}