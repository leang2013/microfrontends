import React, { useEffect, useState } from 'react';
import Notifications from '../components/notifications';
import NotificationsService from '../api/client';

const getNotifications = (setValue) => {
  const stream = NotificationsService.Client.listen(NotificationsService.ListenRequest,{});
  stream.on('data', (response)=> {
    setValue(response.getValue());
  });
};

const NotificationsContainer = () => {
  const [notifications, setNotifications] = useState([]);

   useEffect(() => {
    getNotifications(setNotifications);
  }, []);

  return (
    <div>
      <Notifications notifications={notifications} />
    </div>
  )
}

export default NotificationsContainer;
