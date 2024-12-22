import { Image } from "@/ui/image";
import { css } from "@emotion/css";
import { JSX } from "react";
import user_icon from "@/assets/icons/user.svg";

interface Props {
  src?: string;
}

export const UserAvatar = ({ src }: Props): JSX.Element => {
  return (
    <>
      {src ? (
        <Image
          src={src}
          width={50}
          height={50}
          className={css({
            overflow: "hidden",
            borderRadius: "50%",
            flexShrink: 0,
          })}
        />
      ) : (
        <Image
          src={user_icon}
          width={50}
          height={50}
          className={css({
            overflow: "hidden",
            borderRadius: "50%",
            border: "1px solid #000",
            flexShrink: 0,
            "& > img": {
              width: "70%",
              height: "70%",
            },
          })}
        />
      )}
    </>
  );
};
