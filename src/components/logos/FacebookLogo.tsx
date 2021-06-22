import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"

function FacebookLogo(props: SvgProps) {
  return (
    <Svg
      width={1365.12}
      height={1365.12}
      viewBox="0 0 14222 14222"
      {...props}
    >
      <Circle cx={7111} cy={7112} r={7111} fill="#1977f3" />
      <Path
        d="M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z"
        fill="#fff"
      />
    </Svg>
  )
}

export default FacebookLogo
