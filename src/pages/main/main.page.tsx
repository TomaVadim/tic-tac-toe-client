import { JSX, useContext } from "react";

import { useUserInfo } from "@/api/query-hooks/use-user-info";
import { UserAvatar } from "@/components/user-avatar";
import { Flex } from "@/ui/flex";
import { Typography } from "@/ui/typography";
import { Button } from "@/ui/button";
import { SocketContext } from "@/contexts/socket.context";

const MainPage = (): JSX.Element => {
  const socket = useContext(SocketContext);
  const { data } = useUserInfo({ staleTime: 1000 * 60 * 5 });

  const handleCreateRoom = () => {
    socket.emit("createRoom", {
      roomId: "22221",
      initData:
        "query_id=AAEeec8hAAAAAB55zyGa9KyO&user=%7B%22id%22%3A567245086%2C%22first_name%22%3A%22Vadim%22%2C%22last_name%22%3A%22Toma%22%2C%22username%22%3A%22vadimtoma%22%2C%22language_code%22%3A%22uk%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FmqWot_0o2_bwMejQN3fvTJ2IvmN_MErvUqcye6nDN5Q.svg%22%7D&auth_date=1734812808&signature=etxGWCx9SY5VR-2x2_tBaC_yFcUdAXlbVvyl2RyRbiJ5VWpKuHOQZgjTqF_UsV0Jv5Q11rr2jgbpyQSrhb_2Bg&hash=bc4b550c9c9cc158949dbca34440f9161c5305944e31f297f31bbdf41a24fcb1",
    });
  };

  return (
    <Flex direction="column" gap={20} pt={20} pl={20} pr={20}>
      <Flex alignItems="center" gap={10}>
        <UserAvatar src={data?.photo_url} />

        <Flex direction="column" gap={2}>
          <Typography color="#000" weight={700}>
            {data?.first_name} {data?.last_name}
          </Typography>

          <Typography size={10} color="rgba(0, 0, 0, 0.5)" weight={700}>
            ID: {data?.id}
          </Typography>
        </Flex>
      </Flex>

      <Button onClick={handleCreateRoom}>Create new room</Button>
    </Flex>
  );
};

export default MainPage;
