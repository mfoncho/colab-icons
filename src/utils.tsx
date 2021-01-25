import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import SvgIcon from "@material-ui/core/SvgIcon";

type IconProps = React.ComponentProps<typeof SvgIcon>;

export function createFontAwesomeIcon({ icon }: IconDefinition) {
    return React.memo<IconProps>((props) => {
        return (
            <SvgIcon {...props} viewBox={`0 0 ${icon[0]} ${icon[1]}`}>
                <path fill="currentColor" d={icon[4] as any} />
            </SvgIcon>
        );
    });
}
