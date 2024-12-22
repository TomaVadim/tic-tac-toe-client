import { useUserInfo } from "@/api/query-hooks/use-user-info";
import { Flex } from "@/ui/flex";
import { Image } from "@/ui/image";
import { Loader } from "@/ui/loader";
import { Typography } from "@/ui/typography";
import { css } from "@emotion/css";
import { JSX } from "react";

const MainPage = (): JSX.Element => {
  const { data, isLoading } = useUserInfo({ staleTime: 1000 * 60 * 5 });

  if (isLoading) {
    return (
      <Flex
        className={css({ height: "100vh" })}
        fullWidth
        alignItems="center"
        justifyContent="center"
      >
        <Loader size="large" />
      </Flex>
    );
  }

  return (
    <Flex pt={20} pl={20} pr={20}>
      <Flex alignItems="center" gap={10}>
        <Image
          src={data?.photo_url || ""}
          width={50}
          height={50}
          className={css({
            overflow: "hidden",
            borderRadius: "50%",
            flexShrink: 0,
          })}
        />
        <Typography color="#000" weight={700}>
          {data?.first_name} {data?.last_name}
        </Typography>
      </Flex>
    </Flex>
  );
};

export default MainPage;
