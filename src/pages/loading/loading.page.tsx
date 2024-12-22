import { Flex } from "@/ui/flex";
import { Loader } from "@/ui/loader";
import { css } from "@emotion/css";

export const LoadingPage = (): JSX.Element => {
  return (
    <Flex
      fullWidth
      alignItems="center"
      justifyContent="center"
      className={css({ height: "100vh" })}
    >
      <Loader size="large" />
    </Flex>
  );
};
