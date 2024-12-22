import { JSX, useEffect } from "react";

import { css } from "@emotion/css";
import { useNavigate } from "react-router";

import { Flex } from "@/ui/flex";
import { WaveText } from "@/ui/wave-text";
import { useJoinUser } from "@/api/query-hooks/use-join-user";
import { ROUTES } from "@/shared/enums/routes";

export const LoadingPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { data, isLoading } = useJoinUser({ staleTime: 1000 * 60 * 5 });

  useEffect(() => {
    if (!isLoading && data?.isVerified) {
      navigate(ROUTES.MAIN);
    }
  }, [data, isLoading, navigate]);

  return (
    <Flex
      fullWidth
      alignItems="center"
      justifyContent="center"
      className={css({ height: "100vh" })}
    >
      <WaveText
        text="Tic Tac Toe"
        className={css({
          color: "#FF4500",
          fontSize: 46,
          fontWeight: 700,
        })}
      />
    </Flex>
  );
};
