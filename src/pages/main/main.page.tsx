import { JSX } from "react";

import { useUserInfo } from "@/api/query-hooks/use-user-info";
import { UserAvatar } from "@/components/user-avatar";
import { Flex } from "@/ui/flex";
import { Typography } from "@/ui/typography";

const MainPage = (): JSX.Element => {
  const { data } = useUserInfo({ staleTime: 1000 * 60 * 5 });

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
    </Flex>
  );
};

export default MainPage;
