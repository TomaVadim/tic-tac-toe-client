import { JSX, useEffect, useState } from "react";
import { Flex } from "@/ui/flex";
import { Loader } from "@/ui/loader";
import { css } from "@emotion/css";
import { requestJoinUser } from "@/api/requests/request-join-user";
import { useNavigate } from "react-router";
import { ROUTES } from "@/shared/enums/routes";
import { JoinUser } from "@/shared/types/user";

export const LoadingPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState<JoinUser | null>(null);

  useEffect(() => {
    const fetchAuthorization = async () => {
      try {
        const response = await requestJoinUser();
        setIsAuthorized(response);
        if (response) {
          navigate(ROUTES.MAIN);
        }
      } catch (error) {
        console.error("Authorization error:", error);
        setIsAuthorized({ isVerified: false });
      }
    };

    fetchAuthorization();
  }, [navigate]);

  if (isAuthorized === null) {
    // Show the loader while waiting for the response
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
  }

  // Optionally handle unauthorized state if needed
  return (
    <Flex
      fullWidth
      alignItems="center"
      justifyContent="center"
      className={css({ height: "100vh" })}
    >
      <p>Unauthorized</p>
    </Flex>
  );
};
