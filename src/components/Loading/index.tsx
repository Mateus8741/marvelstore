import ReactLoading from "react-loading";
import { useTheme } from "styled-components";

export function Loading() {
  const colors = useTheme();

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ReactLoading
        type="spinningBubbles"
        color={colors["green-500"]}
        height={67}
        width={75}
      />
    </div>
  );
}
