import { notifications } from '@mantine/notifications';

export const notify = (type: 'Success' | 'Error', msg: string) => {
  if (type === 'Success') {
    notifications.show({
      message: msg,
      title: 'Success',
      color: 'green',
    });
  } else {
    notifications.show({
      message: msg,
      title: 'Error',
      color: 'red',
    });
  }
};
