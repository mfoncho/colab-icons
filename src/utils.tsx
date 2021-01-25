import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import SvgIcon from "@material-ui/core/SvgIcon";

library.add(fab as any, fas, far as any);

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
